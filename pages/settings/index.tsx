import { GridItem } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import getUserData from "../../apis/getUserData";
import BoxHeader from "../../components/common/BoxHeader";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import { userPlaceholder } from "../../data/placeholderData";
import PersonalDetails from "../../modules/Settings/General/PersonalDetails";
import ProfilePhoto from "../../modules/Settings/General/ProfilePhoto";
import SettingsLayoutGrid from "../../modules/Settings/LayoutGrid";
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
      <SettingsLayoutGrid>
        <GridItem rowStart={1} rowSpan={0.5} colStart={1} colEnd={4}>
          <BoxHeader
            title="Settings"
            subtitle="Select a section from the sidebar to change its settings"
          />
        </GridItem>
        <SettingsSidebar />
        <GridItem rowSpan={1} colStart={2} colSpan={1}>
          <PersonalDetails />
        </GridItem>
        <GridItem rowSpan={2} colSpan={1}>
        <ProfilePhoto />
        </GridItem>
      </SettingsLayoutGrid>
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
