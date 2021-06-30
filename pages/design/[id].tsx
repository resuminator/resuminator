import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import getResumeData from "../../apis/getResumeData";
import Layout from "../../components/layouts";
import placeholderData from "../../data/placeholderData";
import ColorSelector from "../../modules/Design/Colors/ColorSelector";
import Columns from "../../modules/Design/Columns";
import FontSelector from "../../modules/Design/Fonts/FontSelector";
import FooterSelector from "../../modules/Design/FooterSelector";
import Spacing from "../../modules/Design/Spacing";
import Viewer from "../../modules/Viewer";
import InitStore from "../../store/InitStore";

interface DesignProps {
  id: string;
}
const Design: NextPage<DesignProps> = ({ id }) => {
  const { data, status } = useQuery("getResumeData", getResumeData, {
    placeholderData,
  });

  return (
    <>
      <InitStore data={data} status={status} id={id}/>
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
            <FooterSelector />
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

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("getResumeData", getResumeData);

  return {
    props: {
      id,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
