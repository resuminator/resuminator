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
import ChangePassword from "../../modules/Settings/General/ChangePassword";
import PersonalDetails from "../../modules/Settings/General/PersonalDetails";
import ProfilePhoto from "../../modules/Settings/General/ProfilePhoto";
import SettingsSidebar from "../../modules/Settings/SettingsSidebar";
import { UserObject } from "../../modules/User/types";
import InitUserStore from "../../store/InitUserStore";

const Settings: NextPage = () => {
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
        minHeight="100vh"
        templateRows="0.5fr repeat(2, 2fr) repeat(2, 1fr)" //6 rows, 1
        templateColumns="1fr 2fr 1fr" //4 columns, 1
        gap={4}
        mx={{ md: "4rem", lg: "7rem" }}
        my={{ base: "2rem" }}
      >
        <GridItem rowStart={1} rowSpan={0.5} colStart={1} colEnd={4}>
          <BoxHeader
            title="Settings"
            subtitle="Select a section from the sidebar to change its settings"
          />
        </GridItem>
        <SettingsSidebar />
        <PersonalDetails />
        <ProfilePhoto />
        <ChangePassword />
      </Grid>
      <Footer />
    </>
  );
};

export default Settings;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("getUserData", getUserData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
