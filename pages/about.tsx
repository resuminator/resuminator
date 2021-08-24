import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import AboutUs from "../website/About";
import Team from "../website/About/Team";
import Footer from "../website/Footer";
import Header from "../website/Nav";

const AboutPage: NextPage = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      minH="100vh"
    >
      <Header />
      <AboutUs />
      <Team />
      <Footer />
    </Box>
  );
};

export default AboutPage;
