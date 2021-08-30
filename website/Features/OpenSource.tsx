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

import {
  Box,
  Button,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FiGithub, FiStar } from "react-icons/fi";
import { GITHUB_REPO, GITHUB_REPO_GFI } from "../../data/RefLinks";
import mp from "../../services/mixpanel";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";

const OpenSource = () => {
  const trackMetric = (from: string, to: string) => {
    mp.track("External Link Trigger", { from, to });
  };

  return (
    <SectionLayout
      id="open-source"
      pb={{ base: "16", sm: "24", md: "36", lg: "40" }}
      bgColor={useColorModeValue("blackAlpha.900", "blackAlpha.500")}
      minH="100vh"
      aria-label="Open Source"
    >
      <HeadingBox
        title="Proudly Community Driven"
        subtitle="Backed by open-source."
        titleProps={{ color: useColorModeValue("teal.200", "teal.400") }}
        subtitleProps={{ color: "teal.500" }}
      />

      <Box px={["0", "4", "16", "24", "56"]} pb="16">
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          lineHeight="tall"
          color="teal.200"
          pb="4"
        >
          We are big time open-source fans because of its collaborative nature
          and growth-for-all persona. We built Resuminator for a community of
          folks just like us because we wanted to give something back to place
          we have learnt so much from. ♥
        </Text>
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          lineHeight="tall"
          color="teal.200"
        >
          You can be a part of this journey by helping us improve Resuminator
          for thousands of people around the world.
        </Text>
      </Box>
      <Stack
        px={["0", "4", "16", "24", "72"]}
        justifyContent="center"
        isInline={useBreakpointValue({ sm: true })}
      >
        <Button
          as="a"
          href={GITHUB_REPO_GFI}
          leftIcon={<FiGithub />}
          colorScheme="teal"
          size={useBreakpointValue({ md: "lg" })}
          onClick={() => trackMetric("Contribute CTA", GITHUB_REPO_GFI)}
        >
          Contribute
        </Button>
        <Button
          as="a"
          href={GITHUB_REPO}
          leftIcon={<FiStar />}
          colorScheme="teal"
          size={useBreakpointValue({ md: "lg" })}
          onClick={() => trackMetric("Star Us on GitHub CTA", GITHUB_REPO_GFI)}
        >
          Star us on GitHub
        </Button>
      </Stack>
    </SectionLayout>
  );
};

export default OpenSource;
