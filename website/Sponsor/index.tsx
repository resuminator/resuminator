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

import { Box, Button, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { SiOpencollective } from "react-icons/si";
import LinkText from "../../components/common/LinkText";
import { BUY_ME_A_COFFEE, OPEN_COLLECTIVE } from "../../data/RefLinks";
import mp from "../../services/mixpanel";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";

const Sponsor = () => {
  const trackMetric = (from: string, to: string) => {
    mp.track("Sponsor CTA Trigger", { from, to });
  };

  return (
    <SectionLayout id="sponsor" minH="100vh" aria-label="Sponsor Project">
      <HeadingBox
        title="Sponsor this project 💛"
        subtitle="Your support will help this project grow and impact the lives of thousands of job seekers"
        subtitleProps={{
          fontSize: { base: "lg", sm: "xl", md: "2xl", lg: "3xl" },
        }}
      />

      <Box px={["0", "4", "16", "24", "56"]} pb="16">
        <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
          Resuminator is a free and open source project built and maintained by
          a{" "}
          <LinkText href="/about#team" textDecoration="underline">
            duo
          </LinkText>{" "}
          from India, and is backed by our community and contributors. You can
          support the development of this project if you believe this project
          added value to your life or could potentially add value to the lives
          of others.
        </Text>
      </Box>
      <Stack
        justifyContent="center"
        isInline={useBreakpointValue({ md: true })}
      >
        <Button
          as="a"
          href={OPEN_COLLECTIVE}
          target="_blank"
          leftIcon={<SiOpencollective />}
          colorScheme="yellow"
          color="#1A202C"
          size={useBreakpointValue({ md: "lg" })}
          onClick={() => trackMetric("Open Collective", OPEN_COLLECTIVE)}
        >
          Become a supporter
        </Button>
        <Button
          as="a"
          href={BUY_ME_A_COFFEE}
          target="_blank"
          leftIcon={<FaPizzaSlice />}
          colorScheme="yellow"
          size={useBreakpointValue({ md: "lg" })}
          color="#1A202C"
          onClick={() => trackMetric("Buy Me a Coffee", BUY_ME_A_COFFEE)}
        >
          Buy us a pizza
        </Button>
      </Stack>
    </SectionLayout>
  );
};

export default Sponsor;
