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

import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";
import PrimaryCTA from "../Hero/PrimaryCTA";

const GetStarted = () => {
  const darkGradient =
    "linear-gradient(90deg, rgba(144,205,244,1) 0%, rgba(101,222,247,1) 15%, rgba(81,237,229,1) 35%, rgba(119,247,193,1) 55%, rgba(180,251,149,1) 75%, rgba(249,248,113,1) 95%)";
  return (
    <SectionLayout
      d="flex"
      flexDir="column"
      alignItems="center"
      pb={{ base: "8", sm: "16", lg: "24", xl: "36" }}
      bg={useColorModeValue("blackAlpha.900", "gray.900")}
    >
      <HeadingBox
        title="Smoother than your cheesecake"
        subtitle="Build a stunning single-page resume for your next job"
        subtitleProps={{
          maxW: "100%",
          color: "blue.100",
        }}
        titleProps={{
          bgGradient: darkGradient,
          bgClip: "text",
        }}
        mb="0"
        py={{ base: "8" }}
      />
      <PrimaryCTA width="fit-content" />
    </SectionLayout>
  );
};

export default GetStarted;
