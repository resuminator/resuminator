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

import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Center, Stack, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import dynamic from "next/dynamic";
import React from "react";
import { HFColors } from "./hf_colors";
const CountdownTimer = dynamic(() => import("./CountdownTimer"), {
  ssr: false,
});

interface Props {}

const HfHero = (props: Props) => {
  const colorModeDefaultLogo = useColorModeValue(
    "/logos/text_dark.svg",
    "/logos/text_light.svg"
  );
  return (
    <Center minHeight="100vh" flexDir="column">
      <Stack
        alignItems="center"
        isInline={useBreakpointValue({ base: false, md: true })}
      >
        <Image
          src="/web/hf_logo_light.svg"
          boxSize={{ base: "16rem", md: "18rem", xl: "20rem" }}
        />
        <Text
          display={{ base: "none", md: "initial" }}
          fontWeight="bold"
          fontSize={{ base: "4xl", xl: "5xl" }}
          position="relative"
          right={{ md: "1rem" }}
          bottom={{ base: "1rem", md: 0 }}
          color="#F74700"
        >
          +
        </Text>
        <Image
          src={colorModeDefaultLogo}
          width={{ base: "160px", md: "240px", xl: "400px" }}
          height={{ base: "32px", md: "48px", xl: "80px" }}
        />
      </Stack>
      <Text
        fontWeight="semibold"
        fontSize={{ base: "lg", md: "xl", lg: "xl", xl: "2xl" }}
        color={useColorModeValue(HFColors.text.secondary, HFColors.text.light)}
      >
        1st October 2021 to 31st October 2021
      </Text>
      <CountdownTimer />
    </Center>
  );
};

export default HfHero;
