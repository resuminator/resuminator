import { Box } from "@chakra-ui/layout";
import { GetServerSidePropsContext, NextPage } from "next";
import nookies from "nookies";
import React, { useEffect } from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getUserData } from "../../apis/meta";
import { getResumeData } from "../../apis/resume";
import Layout from "../../components/layouts";
import placeholderData, { userPlaceholder } from "../../data/placeholderData";
import SEO from "../../modules/SEO";
import DownloadResume from "../../modules/Share/Download";
import { UserObject } from "../../modules/User/types";
import Viewer from "../../modules/Viewer";
import mp from "../../services/mixpanel";
import InitStore from "../../store/InitStore";
import InitUserStore from "../../store/InitUserStore";

interface ShareProps {
  token: string;
  id: string;
}

const Share: NextPage<ShareProps> = ({ token, id }) => {
  const { data, status } = useQuery(
    "getResumeData",
    () => getResumeData(token, id),
    {
      placeholderData,
    }
  );
  const { data: userData, status: userQueryStatus } = useQuery<
    UserObject,
    Error
  >("getUserData", () => getUserData(token), {
    placeholderData: userPlaceholder,
  });

  useEffect(() => {
    mp.track("Share Page View", { id });
  }, [id]);

  return (
    <>
      <SEO title="Share Resume" />
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
          <Box
            aria-label="Share Options"
            flexBasis="50%"
            height="29.7cm"
            overflowY="auto"
          >
            <DownloadResume id={id} />
          </Box>
          <Box aria-label="Resume Preview" flexBasis="50%">
            <Viewer withStatus />
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Share;

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
  const { id } = ctx.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getResumeData", () =>
    getResumeData(token, id.toString())
  );
  return {
    props: {
      token,
      id,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
