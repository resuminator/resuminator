import { Box } from "@chakra-ui/layout";
import axios from "axios";
import { NextPage } from "next";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Layout from "../components/layouts";
import API_URL from "../config/server";
import placeholderData from "../data/placeholderData";
import Viewer from "../modules/Viewer";
import InitStore from "../store/InitStore";

const getResumeData = async () => {
  const res = await axios.get(`${API_URL}/resume`);
  return res.data;
};

const Design: NextPage = () => {
  const { data, status } = useQuery("getResumeData", getResumeData, {
    placeholderData,
  });

  return (
    <>
      <InitStore data={data} status={status} />
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
            Some Design Controls
          </Box>
          <Box aria-label="Resume Preview" flexBasis="50%">
            <Viewer />
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Design;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("getResumeData", getResumeData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
