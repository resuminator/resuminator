/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Grid, useDisclosure } from "@chakra-ui/react";
import { GetServerSidePropsContext, NextPage } from "next";
import dynamic from "next/dynamic";
import nookies from "nookies";
import React from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getUserData } from "../apis/meta";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import { userPlaceholder } from "../data/placeholderData";
import ResumeList from "../modules/Home/ResumeList";
import Sidebar from "../modules/Home/Sidebar";
import SEO from "../modules/SEO";
import useUserStore from "../modules/User/store";
import { UserObject } from "../modules/User/types";
import mp from "../services/mixpanel";
import Papercups from "../services/papercups";
import InitUserStore from "../store/InitUserStore";

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
  const { _id, isBanned, active } = useUserStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    mp.track("Home Page View");
  }, []);

  return (
    <>
      <SEO title="Create new resume" />
      <InitUserStore data={data} status={status} />
      <Header />
      <Grid
        height="100vh"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        mx={{ md: "4rem", lg: "7rem" }}
        my={{ base: "2rem" }}
      >
        {/**Each component under Grid must be wrapped inside a GridItem component */}
        <Sidebar />
        <ResumeList handleNew={onOpen} />

        {/* Will be uncommented when we'll launch the template gallery */}
        {/* <TemplateList /> */}
      </Grid>
      <Footer />
      <CreateResumeModal
        data={{ _id, isBanned, active }}
        options={{ isOpen, onClose }}
      />
      <Papercups />
    </>
  );
};

export default Home;

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
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getUserData", () => getUserData(token));
  return {
    props: {
      token,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
