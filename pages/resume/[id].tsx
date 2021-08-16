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
  //If token is present, pass it to the query to fetch data from API
  const { id } = ctx.params;
  let token: string;
  
  const userAgent = ctx.req.headers['user-agent'];
  if(userAgent.split(' ').includes('R8')){
    token = ctx.req.headers['token'].toString();
    console.log("Request from Puppeteer", token.substr(0, 25))
  } else {
    token = nookies.get(ctx).token;
    console.log("Request from NextJS")
  }

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getResumeData", () =>
    getResumeData(token.toString(), id.toString())
  );
  return {
    props: {
      token,
      id,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
