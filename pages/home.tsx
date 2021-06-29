import { Grid, useToast } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useCallback } from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import getResumeList from "../apis/getResumeList";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { resumeList } from "../data/placeholderData";
import ResumeList from "../modules/Home/ResumeList";
import Sidebar from "../modules/Home/Sidebar";
import TemplateList from "../modules/Home/TemplateList";
import useGlobalStore from "../store/global.store";
import useResumeStore from "../store/resume.store";
import { ResumeStyleObject } from "../store/types";

const Home: NextPage = () => {
  const { data, status } = useQuery("getResumeList", getResumeList, {
    placeholderData: resumeList,
  });
  const setProperty = useResumeStore((state) => state.setProperty);
  const setLoading = useGlobalStore((state) => state.setLoading);
  const toast = useToast();

  const initResume = useCallback(
    (object: ResumeStyleObject) => {
      setProperty("_id", object.id);
      setProperty("properties", {
        inputs: object.inputs, //default
        layout: object.layout, //default
      });
      setProperty("fontProfile", object.font_profile);
      setProperty("color", object.color);
      setProperty("spacing", object.spacing);
      setProperty("profileName", object.profile_name);
    },
    [setProperty]
  );

  if (status === "error")
    toast({
      title: "Cannot connect to server.",
      variant: "subtle",
      description:
        "Try checking your network connection while we try to reconnect.",
      status: "error",
      duration: 3500,
      isClosable: true,
    });

  if (status === "loading") setLoading(true);

  return (
    <>
      <Header />
      <Grid
        height="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        mx={{ md: "4rem", lg: "7rem" }}
        my={{ base: "2rem" }}
      >
        {/**Each component under Grid must be wrapped inside a GridItem component */}
        <Sidebar />
        <ResumeList data={data} callback={initResume} />
        <TemplateList />
      </Grid>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("getResumeList", getResumeList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
