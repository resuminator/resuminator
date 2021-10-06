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

import { Box } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import SEO from "../modules/SEO";
import mp from "../services/mixpanel";
import Announcement from "../website/Banners/Announcement";
import GetStarted from "../website/Banners/GetStarted";
import Broadmap from "../website/Broadmap";
import FourGrid from "../website/Features/FeaturesGrid";
import Champions from "../website/Features/FullFeatures";
import OpenSource from "../website/Features/OpenSource";
import Footer from "../website/Footer";
import Graph from "../website/Graph";
import Hero from "../website/Hero";
import Nav from "../website/Nav";
import Sponsor from "../website/Sponsor";
import Testimonials from "../website/Testimonials";
const CookieBanner = dynamic(() => import("../website/Cookies/CookieBanner"), {
  ssr: false
});

const Index: NextPage = () => {
  const acceptedCookie = Cookies.get("user-accepted-cookies");

  useEffect(() => {
    mp.track("Landing Page View");
  }, []);

  return (
    <>
      <SEO />
      <Box
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        minH="100vh"
        mt="16"
      >
        <Nav />
        <Announcement />
        <Hero />
        <Graph />
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
    </>
  );
};

export default Index;
