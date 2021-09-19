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

import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Subtext = () => {
  return (
    <Text
      maxW={{ base: "100%", md: "80%", lg: "60%", xl: "50%" }}
      textAlign="center"
      fontSize={{ base: "md", sm: "lg", lg: "xl", xl: "2xl" }}
      fontWeight="medium"
      letterSpacing="tight"
      lineHeight="tall"
      mb="8"
      color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
    >
      Resuminator gives you fastest and the simplest resume building experience.
      Apply to your dream job, 2x faster!
    </Text>
  );
};

export default Subtext;
