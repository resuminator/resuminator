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

import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Method } from ".";

interface Props {
  id: Method;
  method: Method;
  callback: (value: Method) => void;
}

const ToggleCard: React.FC<Props & BoxProps> = ({
  id,
  method,
  callback,
  children,
}) => {
  const darkModeProps: BoxProps = {
    bg: method === id ? "blue.800" : "inherit",
    borderColor: method === id ? "blue.200" : "gray.200",
    _hover: {
      bg: method === id ? "blue.800" : "whiteAlpha.200",
    },
  };

  const lightModeProps: BoxProps = {
    bg: method === id ? "blue.50" : "inherit",
    borderColor: method === id ? "blue.500" : "gray.200",
    _hover: {
      bg: method === id ? "blue.50" : "gray.100",
    },
  };

  const props = useColorModeValue(lightModeProps, darkModeProps);

  return (
    <Box
      p="4"
      m="2"
      cursor="pointer"
      flexBasis="50%"
      onClick={() => callback(id)}
      borderRadius="10px"
      border="2px solid"
      {...props}
    >
      {children}
    </Box>
  );
};

export default ToggleCard;
