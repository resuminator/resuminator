import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect } from "react";
import mp from "../services/mixpanel";
import AboutUs from "../website/About";
import Team from "../website/About/Team";
import GetStarted from "../website/Banners/GetStarted";
import OpenSource from "../website/Features/OpenSource";
import Footer from "../website/Footer";
import Header from "../website/Nav";

const AboutPage: NextPage = () => {
  useEffect(() => {
    mp.track("About Page View");
  }, []);

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
      <OpenSource />
      <GetStarted />
      <Footer />
    </Box>
  );
};

export default AboutPage;
