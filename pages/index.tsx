import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import Footer from "../components/website/Footer";
import Header from "../components/website/Header";

const Index: NextPage = () => {
  return (
    <Box
    display="flex"
    flexDir="column"
    justifyContent="space-between"
    minH="100vh"
  >
      <Header />
      <Footer/>
    </Box>
  );
};

export default Index;
