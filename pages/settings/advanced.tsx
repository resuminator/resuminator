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
import DeleteAccount from "../../modules/Settings/Advanced/DeleteAccount";
import DeleteData from "../../modules/Settings/Advanced/DeleteData";
import RequestData from "../../modules/Settings/Advanced/RequestData";
import SettingsLayoutGrid from "../../modules/Settings/LayoutGrid";
import SettingsSidebar from "../../modules/Settings/SettingsSidebar";
import { UserObject } from "../../modules/User/types";
import InitUserStore from "../../store/InitUserStore";

const AdvancedSettings: NextPage = () => {
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
        <GridItem rowSpan={1} colSpan={4}>
          <BoxHeader
            title="Advanced Settings"
            subtitle="Control your data settings. Request, or delete your data"
          />
        </GridItem>
        <SettingsSidebar />
        <GridItem rowSpan={3} colSpan={1}>
          <RequestData />
          <DeleteData />
          <DeleteAccount />
        </GridItem>
      </SettingsLayoutGrid>
      <Footer />
    </>
  );
};

export default AdvancedSettings;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("getUserData", getUserData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
