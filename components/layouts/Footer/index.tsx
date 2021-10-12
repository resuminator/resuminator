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
import { GridItem, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import SocialLinks from "../../../data/SocialLinks";
import ColorModeMenu from "../../common/ColorModeMenu";
import { LogoWithText } from "../Logos";
import Copyright from "./Copyright";
import SocialButtons from "./SocialButtons";

const Footer = () => {
  return (
    <Stack
      spacing="4"
      as="footer"
      backgroundColor={useColorModeValue("darkblue", "gray.900")}
      p={{ base: "4", md: "8", lg: "2rem 8rem" }}
    >
      <SimpleGrid
        alignItems="center"
        templateColumns={{
          base: "1fr",
          md: "1fr 1fr 1fr",
          lg: "1fr 1fr 1fr"
        }}
      >
        <GridItem>
          <LogoWithText variant="light" />
          <Copyright py="4" />
        </GridItem>
        <GridItem justifySelf={{ md: "center" }}>
          <SocialButtons data={SocialLinks} />
        </GridItem>
        <GridItem justifySelf={{ md: "end" }}>
          <ColorModeMenu />
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
};

export default Footer;
