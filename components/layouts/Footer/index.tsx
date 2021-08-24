import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";
import FooterLinks from "../../../data/FooterLinks";
import SocialLinks from "../../../data/SocialLinks";
import ColorModeMenu from "../../common/ColorModeMenu";
import { LogoWithText } from "../Logos";
import Copyright from "./Copyright";
import LinkStack from "./LinkStack";
import SocialButtons from "./SocialButtons";

const Footer = () => {
  return (
    <Box
      as="footer"
      backgroundColor={useColorModeValue("darkblue", "gray.900")}
      p={{ base: "2rem", md: "4rem", lg: "2rem 8rem" }}
    >
      <Box
        display="flex"
        alignContent="center"
        justifyContent="space-between"
        mb={{ base: "2", md: "8" }}
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        <LogoWithText
          width={{ base: "100%", md: "fit-content" }}
          mb="0"
        />
        <LinkStack links={FooterLinks} />
      </Box>
      <Box
        display="flex"
        alignContent="center"
        justifyContent="space-between"
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        <Copyright />
        <SocialButtons data={SocialLinks} />
        <ColorModeMenu />
      </Box>
    </Box>
  );
};

export default Footer;
