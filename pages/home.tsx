import { Grid, useDisclosure } from "@chakra-ui/react";
import { GetServerSidePropsContext, NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import getUserData from "../apis/getUserData";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import {
  resumeMetaPlaceholder,
  userPlaceholder,
} from "../data/placeholderData";
import ResumeList from "../modules/Home/ResumeList";
import Sidebar from "../modules/Home/Sidebar";
import { UserObject } from "../modules/User/types";
import InitUserStore from "../store/InitUserStore";
import nookies from "nookies";

const CreateResumeModal = dynamic(
  () => import("../modules/Home/CreateResumeModal")
);

interface HomePageProps {
  token: string;
}

const Home: NextPage<HomePageProps> = ({ token }) => {
  const { data, status } = useQuery<UserObject, Error>(
    "getUserData",
    () => getUserData(token),
    { placeholderData: userPlaceholder }
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNewResumeButton = () => {
    if (!data.active.length) return console.log(resumeMetaPlaceholder);
    return onOpen();
  };

  return (
    <>
      <InitUserStore data={data} status={status} />
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
        <ResumeList handleNew={handleNewResumeButton} />

        {/* Will be uncommented when we'll launch the template gallery */}
        {/* <TemplateList /> */}
      </Grid>
      <CreateResumeModal data={data} options={{ isOpen, onClose }} />
      <Footer />
    </>
  );
};

export default Home;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();
  try {
    const cookies = nookies.get(ctx);
    const token = cookies.token;

    await queryClient.prefetchQuery("getUserData", () => getUserData(token));
    return {
      props: {
        token,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (err) {
    ctx.res.writeHead(401, { Location: "/login" });
    ctx.res.end();

    return { props: {} as never };
  }
};
