import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { HStack, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { FaChevronUp, FaMoon, FaSun } from "react-icons/fa";

const ColorModeMenu = () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<FaChevronUp />}
        my={{ base: "4", md: "0" }}
        maxW="fit-content"
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
  );
};

export default ColorModeMenu;
