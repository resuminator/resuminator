import { NextPage } from "next";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import getResumeData from "../apis/getResumeData";
import placeholderData from "../data/placeholderData";
import ResumePaper from "../modules/Resume";
import InitStore from "../store/InitStore";

const Resume: NextPage = () => {
  const { data, status } = useQuery("getResumeData", getResumeData, {
    placeholderData,
  });

  return (
    <>
      <InitStore data={data} status={status} />
      <ResumePaper />
    </>
  );
};

export default Resume;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("getResumeData", getResumeData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
