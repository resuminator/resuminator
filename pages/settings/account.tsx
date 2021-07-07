import { Grid, GridItem } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import getUserData from "../../apis/getUserData";
import BoxHeader from "../../components/common/BoxHeader";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import { userPlaceholder } from "../../data/placeholderData";
import ChangePassword from "../../modules/Settings/Security/ChangePassword";
import SettingsSidebar from "../../modules/Settings/SettingsSidebar";
import { UserObject } from "../../modules/User/types";
import InitUserStore from "../../store/InitUserStore";

const SecuritySettings: NextPage = () => {
  const { data, status } = useQuery<UserObject, Error>(
    "getUserData",
    getUserData,
    { placeholderData: userPlaceholder }
  );

  return (
    <>
      <InitUserStore data={data} status={status} />
      <Header />
      <Grid
        minH="100vh"
        templateRows="1fr repeat(4, 2fr)"
        templateColumns="1fr 2fr 1fr"
        gap={4}
        mx={{ md: "4rem", lg: "7rem" }}
        my={{ base: "2rem" }}
      >
        <GridItem rowSpan={1} colSpan={4}>
          <BoxHeader
            title="Settings"
            subtitle="Select a section from the sidebar to change its settings"
          />
        </GridItem>
        <SettingsSidebar />
        <ChangePassword />
      </Grid>
      <Footer />
    </>
  );
};

export default SecuritySettings;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("getUserData", getUserData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
