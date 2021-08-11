import { GetServerSidePropsContext, NextPage } from "next";
import nookies from "nookies";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getResumeData } from "../../apis/resume";
import placeholderData from "../../data/placeholderData";
import ResumePaper from "../../modules/Resume";
import InitStore from "../../store/InitStore";

interface ResumeProps {
  token: string;
  id: string;
}

const Resume: NextPage<ResumeProps> = ({ token, id }) => {
  const { data, status } = useQuery(
    "getResumeData",
    () => getResumeData(token, id),
    {
      placeholderData,
    }
  );

  return (
    <>
      <InitStore data={data} status={status} />
      <ResumePaper />
    </>
  );
};

export default Resume;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  //Try to get token from cookies.
  const cookies = nookies.get(ctx);
  const token = cookies.token;

  //If the token does not exist or is cleared then redirect to login page.
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  //If token is present, pass it to the query to fetch data from API
  const { id } = ctx.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getResumeData", () =>
    getResumeData(token, id.toString())
  );
  return {
    props: {
      token,
      id,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
