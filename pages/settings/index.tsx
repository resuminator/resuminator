import { GridItem } from "@chakra-ui/react";
import { GetServerSidePropsContext, NextPage } from "next";
import nookies from "nookies";
import React, { useEffect } from "react";
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

export interface SettingsPageProps {
  token: string;
}

const Settings: NextPage<SettingsPageProps> = ({ token }) => {
  const { data, status } = useQuery<UserObject, Error>(
    "getUserData",
    () => getUserData(token),
    { placeholderData: userPlaceholder }
  );

  useEffect(() => console.log(data), [data]);

  return (
    <>
      <InitUserStore data={data} status={status} />
      <Header />
      <SettingsLayoutGrid>
        <GridItem rowSpan={1} colSpan={4}>
          <BoxHeader
            title="General Settings"
            subtitle="Change how your profile looks, update your personal info."
          />
        </GridItem>
        <SettingsSidebar />
        <GridItem rowSpan={1} colSpan={1}>
          <PersonalDetails />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <ProfilePhoto />
        </GridItem>
      </SettingsLayoutGrid>
      <Footer />
    </>
  );
};

export default Settings;

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
