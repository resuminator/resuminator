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
          lg: "1fr 1fr 1fr",
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
