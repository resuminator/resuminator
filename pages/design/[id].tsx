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

import { Box } from "@chakra-ui/layout";
import { GetServerSidePropsContext, NextPage } from "next";
import nookies from "nookies";
import { useEffect } from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getUserData } from "../../apis/meta";
import { getResumeData } from "../../apis/resume";
import Layout from "../../components/layouts";
import placeholderData, { userPlaceholder } from "../../data/placeholderData";
import ColorSelector from "../../modules/Design/Colors/ColorSelector";
import Columns from "../../modules/Design/Columns";
import FontSelector from "../../modules/Design/Fonts/FontSelector";
import Spacing from "../../modules/Design/Spacing";
import SEO from "../../modules/SEO";
import { UserObject } from "../../modules/User/types";
import Viewer from "../../modules/Viewer";
import mp from "../../services/mixpanel";
import Papercups from "../../services/papercups";
import InitStore from "../../store/InitStore";
import InitUserStore from "../../store/InitUserStore";

interface DesignProps {
  id: string;
  token: string;
}

const Design: NextPage<DesignProps> = ({ token, id }) => {
  const { data, status } = useQuery(
    "getResumeData",
    () => getResumeData(token, id),
    {
      placeholderData
    }
  );
  const { data: userData, status: userQueryStatus } = useQuery<
    UserObject,
    Error
  >("getUserData", () => getUserData(token), {
    placeholderData: userPlaceholder
  });

  useEffect(() => {
    mp.track("Design Page View", { id });
  }, [id]);

  return (
    <>
      <SEO title="Customize Resume" />
      <InitStore data={data} status={status} id={id} />
      <InitUserStore data={userData} status={userQueryStatus} />
      <Layout display="flex" flexDir="column" alignItems="center" w="100%">
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          width="100%"
          px="0"
          py="5"
        >
          <Box aria-label="Resume Inputs" flexBasis="50%">
            <Columns />
            <Spacing />
            <FontSelector />
            <ColorSelector />
          </Box>
          <Box aria-label="Resume Preview" flexBasis="50%">
            <Viewer />
          </Box>
        </Box>
      </Layout>
      <Papercups />
    </>
  );
};

export default Design;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  //Try to get token from cookies.
  const cookies = nookies.get(ctx);
  const token = cookies.token;

  //If the token does not exist or is cleared then redirect to login page.
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login"
      }
    };
  }
  const { id } = ctx.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getResumeData", () =>
    getResumeData(token, id.toString())
  );

  return {
    props: {
      token,
      id,
      dehydratedState: dehydrate(queryClient)
    }
  };
};
