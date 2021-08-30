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
