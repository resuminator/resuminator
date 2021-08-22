import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import Champions from "../website/Features/Champions";
import OpenSource from "../website/Features/OpenSource";
import FourGrid from "../website/Features/SweetSpot";
import Footer from "../website/Footer";
import Header from "../website/Nav";
import Hero from "../website/Hero";

const Index: NextPage = () => {
  return (
    <Box
    display="flex"
    flexDir="column"
    justifyContent="space-between"
    minH="100vh"
  >
      <Header />
      <Hero/>
      <FourGrid/>
      <Champions/>
      <OpenSource/>
      <Footer/>
    </Box>
  );
};

export default Index;
