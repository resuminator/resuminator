import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Divider, HStack, Stack, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaChevronUp, FaMoon, FaSun } from "react-icons/fa";
import LogoWithText from "../layouts/LogoWithText";

const Footer = () => {
  const { colorMode, setColorMode } = useColorMode();
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
        <Stack
          py={{ base: "4", md: "0" }}
          spacing={{ base: "2", md: "8" }}
          color="whiteAlpha.900"
          direction={{ base: "column", md: "row" }}
        >
          <Text fontWeight="medium">Sponsor</Text>
          <Text fontWeight="medium">BroadMap</Text>
          <Text fontWeight="medium">Guides</Text>
          <Text fontWeight="medium">Docs</Text>
        </Stack>
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
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaChevronUp />}
            my={{ base: "4", md: "0" }}
          >
            {colorMode === "light" ? (
              <HStack>
                <FaSun />
                <Text>Light</Text>
              </HStack>
            ) : (
              <HStack>
                <FaMoon />
                <Text>Dark</Text>
              </HStack>
            )}
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FaSun />} onClick={() => setColorMode("light")}>
              Light
            </MenuItem>
            <MenuItem icon={<FaMoon />} onClick={() => setColorMode("dark")}>
              Dark
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Footer;
