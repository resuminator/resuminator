import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import Champions from "../website/Features/FullFeatures";
import OpenSource from "../website/Features/OpenSource";
import FourGrid from "../website/Features/FeaturesGrid";
import Footer from "../website/Footer";
import Header from "../website/Nav";
import Hero from "../website/Hero";
import Broadmap from "../website/Broadmap";
import Sponsor from "../website/Sponsor";

const Index: NextPage = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      minH="100vh"
    >
      <Header />
      <Hero />
      <FourGrid />
      <Champions />
      <OpenSource />
      <Sponsor />
      <Broadmap />
      <Footer />
    </Box>
  );
};

export default Index;
