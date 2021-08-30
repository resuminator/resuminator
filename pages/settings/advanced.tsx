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

import { GridItem } from "@chakra-ui/react";
import { GetServerSidePropsContext, NextPage } from "next";
import nookies from "nookies";
import React, { useEffect } from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getAccountSettings } from "../../apis/settings";
import BoxHeader from "../../components/common/BoxHeader";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import SEO from "../../modules/SEO";
import DeleteAccount from "../../modules/Settings/Advanced/DeleteAccount";
import RequestData from "../../modules/Settings/Advanced/RequestData";
import SettingsLayoutGrid from "../../modules/Settings/LayoutGrid";
import SettingsSidebar from "../../modules/Settings/SettingsSidebar";
import { AccountSettings } from "../../modules/Settings/types";
import mp from "../../services/mixpanel";

interface SettingsPageProps {
  token: string;
}

const AdvancedSettings: NextPage<SettingsPageProps> = ({ token }) => {
  const { data } = useQuery<AccountSettings, Error>("getAccountSettings", () =>
    getAccountSettings(token)
  );

  useEffect(() => {
    mp.track("Advanced Settings Page View");
  }, []);

  return (
    <>
      <SEO title="Advanced Settings" />
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
          <RequestData data={data} />
          <DeleteAccount />
        </GridItem>
      </SettingsLayoutGrid>
      <Footer />
    </>
  );
};

export default AdvancedSettings;

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
  await queryClient.prefetchQuery("getAccountSettings", () =>
    getAccountSettings(token)
  );
  return {
    props: {
      token,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
