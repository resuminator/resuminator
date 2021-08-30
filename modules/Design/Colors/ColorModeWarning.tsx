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

import { useColorMode } from "@chakra-ui/color-mode";
import { HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import useGlobalStore from "../../../store/global.store";

interface Props {}

const ColorModeWarning = (props: Props) => {
  const grayscaleFilter = useGlobalStore((state) => state.grayscaleFilter);
  const { colorMode } = useColorMode();

  return (
    colorMode === "dark" &&
    grayscaleFilter && (
      <HStack mb="2" color="yellow">
        <FiAlertTriangle />
        <Text fontSize="sm">Use light mode for an accurate preview</Text>
      </HStack>
    )
  );
};

export default ColorModeWarning;
