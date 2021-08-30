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

import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

const SectionLayout: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      px={{ base: "6", md: "8", lg: "24", xl: "36" }}
      pb="0"
      pt={{ base: "8", sm: "16", md: "20" }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default SectionLayout;
