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

import { AspectRatio, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import TextLink from "../../components/common/TextLink";
import mp from "../../services/mixpanel";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";

const Graph = () => {
  const trackMetric = (from: string, to: string) => {
    mp.track("External Link Trigger", { from, to });
  };

  const author = {
    name: "Apoorva Agrawal",
    website: "https://pixelkanya.com",
  };

  return (
    <SectionLayout>
      <HeadingBox
        title="Better than your doc resume, faster than a LaTeX editor"
        subtitle="Landing a sweet spot between customization and ease ⚡"
        titleProps={{ color: useColorModeValue("purple.500", "purple.400") }}
        py={{ base: "0" }}
        pt={{ base: "8", sm: "10", md: "16", lg: "20" }}
        subtitleProps={{
          fontSize: { base: "xl", sm: "2xl", lg: "3xl", xl: "4xl" },
          maxW: { md: "80%", lg: "70%" },
        }}
      />
      <AspectRatio ratio={1} maxW="600px" margin="0 auto">
        <Image src="/graph.svg" />
      </AspectRatio>
      <Text
        fontSize="xs"
        color="gray"
        opacity={useColorModeValue("100%", "80%")}
        textAlign={{ sm: "center" }}
      >
        Illustration by{" "}
        <TextLink
          text={author.name}
          link={author.website}
          color={useColorModeValue("purple.500", "purple.400")}
          onClick={() => trackMetric("Graph Attribution", author.website)}
        />
      </Text>
    </SectionLayout>
  );
};

export default Graph;
