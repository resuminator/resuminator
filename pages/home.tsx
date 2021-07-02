import { Grid, useToast } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import getUserData from "../apis/getUserData";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import ResumeList from "../modules/Home/ResumeList";
import Sidebar from "../modules/Home/Sidebar";
import TemplateList from "../modules/Home/TemplateList";
import useUserStore from "../modules/User/store";
import { UserObject } from "../modules/User/types";

const Home: NextPage = () => {
  const { data, status } = useQuery<UserObject, Error>("getUserData", () =>
    getUserData("viveknigam3003")
  );
  const setProperty = useUserStore((state) => state.setProperty);
  const toast = useToast();

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

  useEffect(() => {
    if (status === "success") {
      setProperty("_id", data._id);
      setProperty("active", data.active);
      setProperty("email", data.email);
      setProperty("fullName", data.fullName);
      setProperty("isBanned", data.isBanned);
    }
  }, [status, data, setProperty]);

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
        <ResumeList data={data.active} />
        <TemplateList />
      </Grid>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("getUserData", () =>
    getUserData("viveknigam3003")
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
