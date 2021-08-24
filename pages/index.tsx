import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import GetStarted from "../website/Banners/GetStarted";
import Broadmap from "../website/Broadmap";
import FourGrid from "../website/Features/FeaturesGrid";
import Champions from "../website/Features/FullFeatures";
import OpenSource from "../website/Features/OpenSource";
import Footer from "../website/Footer";
import Hero from "../website/Hero";
import Header from "../website/Nav";
import Sponsor from "../website/Sponsor";
import Testimonials from "../website/Testimonials";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
const CookieBanner = dynamic(() => import("../website/Cookies/CookieBanner"), {
  ssr: false,
});

const Index: NextPage = () => {
  const acceptedCookie = Cookies.get("user-accepted-cookies");

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
      <Testimonials />
      <Broadmap />
      <GetStarted />
      {!acceptedCookie && <CookieBanner />}
      <Footer />
    </Box>
  );
};

export default Index;
