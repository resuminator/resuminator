import { NextPage } from "next";
import React from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import getResumeData from "../apis/getResumeData";
import Layout from "../components/layouts";
import placeholderData from "../data/placeholderData";
import InitStore from "../store/InitStore";

const Home: NextPage = () => {
  const { data, status } = useQuery("getResumeData", getResumeData, {
    placeholderData,
  });

  return (
    <>
      <InitStore data={data} status={status} />
      <Layout
        display="flex"
        flexDir="column"
        alignItems="center"
        w="100%"
      ></Layout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("getResumeData", getResumeData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
