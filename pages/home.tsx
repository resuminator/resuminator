import { Grid, GridItem, useToast } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useCallback } from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import getResumeList from "../apis/getResumeList";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { resumeList } from "../data/placeholderData";
import ResumeList from "../modules/Home/ResumeList";
import TemplateList from "../modules/Home/TemplateList";
import useGlobalStore from "../store/global.store";
import useResumeStore from "../store/resume.store";
import { ResumeStyleObject } from "../store/types";

const Home: NextPage = () => {
  const { data, status } = useQuery("getResumeList", getResumeList, {
    placeholderData: resumeList,
  });
  const { setProperties, setFontProfile, setColorProfile, setSpacing, setProfileName } =
    useResumeStore();
  const toast = useToast();
  const { setLoading } = useGlobalStore();

  const initResume = useCallback(
    (object: ResumeStyleObject) => {
      setProperties({
        inputs: object.inputs, //default
        layout: object.layout, //default
      });
      setFontProfile(object.font_profile);
      setColorProfile(object.color);
      setSpacing(object.spacing);
      setProfileName(object.profile_name)
    },
    [setProperties, setFontProfile, setColorProfile, setSpacing, setProfileName]
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
      >
        {/**Each component under Grid must be wrapped inside a GridItem component */}
        <GridItem rowSpan={2} colSpan={1} />
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
