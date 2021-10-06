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
import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const OverflowWarning = () => {
  const warningColor = useColorModeValue("orange.500", "yellow.200");
  return (
    <HStack>
      <Icon as={FiAlertTriangle} color={warningColor} />
      <Text fontSize="sm" color={warningColor} opacity="0.8">
        Warning: Some content on your resume might be hidden
      </Text>
    </HStack>
  );
};

export default OverflowWarning;
