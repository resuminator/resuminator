import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Divider, HStack, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaChevronUp, FaMoon, FaSun } from "react-icons/fa";
import LogoWithText from "../layouts/LogoWithText";

const Footer = () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Box as="footer" bg="blue" p={{ md: "4rem", lg: "2rem 8rem" }}>
      <Box
        display="flex"
        alignContent="center"
        justifyContent="space-between"
        mb="8"
      >
        <LogoWithText LogoProps={{ fontSize: "xl", color: "blue.50" }} mb="0" />
        <HStack spacing="8" color="whiteAlpha.900">
          <Text fontWeight="medium">Sponsor</Text>
          <Text fontWeight="medium">BroadMap</Text>
          <Text fontWeight="medium">Guides</Text>
          <Text fontWeight="medium">Docs</Text>
        </HStack>
      </Box>
      <Box display="flex" alignContent="center" justifyContent="space-between">
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
          <MenuButton as={Button} rightIcon={<FaChevronUp />}>
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
