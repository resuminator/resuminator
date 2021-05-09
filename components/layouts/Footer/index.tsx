import { ButtonGroup, IconButton } from "@chakra-ui/button";
import { Box, Divider, Text } from "@chakra-ui/layout";
import React from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import ColorModeMenu from "../../common/ColorModeMenu";
import LogoWithText from "../LogoWithText";
import FooterLinks from "./FooterLinks";
import LinkStack from "./LinkStack";

const Footer = () => {
  
  return (
    <Box
      as="footer"
      bg="navy"
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
          LogoProps={{ fontSize: "xl", color: "blue.50" }}
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
        <Text alignSelf="center" fontSize="sm" color="whiteAlpha.900">
          Copyright &copy; 2021 Resuminator
        </Text>
        <ButtonGroup>
          <IconButton
            variant="ghost"
            aria-label="github-icon"
            icon={<AiOutlineGithub />}
            isRound
            color="whiteAlpha.900"
            colorScheme="inherit"
            as="a"
            href="https://github.com/resuminator/resuminator"
            target="_blank"
          />
          <Divider
            orientation="vertical"
            alignSelf="center"
            height="60%"
            color="whiteAlpha.900"
          />
          <IconButton
            color="whiteAlpha.900"
            colorScheme="inherit"
            variant="ghost"
            aria-label="twitter-icon"
            icon={<AiOutlineTwitter />}
            isRound
            as="a"
            href="https://twitter.com/resuminator"
            target="_blank"
          />
        </ButtonGroup>
        <ColorModeMenu/>
      </Box>
    </Box>
  );
};

export default Footer;
