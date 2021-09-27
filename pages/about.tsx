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
import { NextPage } from "next";
import { useEffect } from "react";
import SEO from "../modules/SEO";
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
    <>
      <SEO title="About Us" />
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
    </>
  );
};

export default AboutPage;
