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

const RevuePolicy = () => {
  return (
    <Text
      fontSize={{ base: "xs", lg: "sm" }}
      color={useColorModeValue("blackAlpha.700", "whiteAlpha.600")}
      py="4"
    >
      By subscribing, you agree with Revue’s{" "}
      <Text
        color="blue.500"
        as="a"
        target="_blank"
        href="https://www.getrevue.co/terms"
        rel="noreferrer"
      >
        Terms of Service
      </Text>{" "}
      and{" "}
      <Text
        color="blue.500"
        as="a"
        target="_blank"
        href="https://www.getrevue.co/privacy"
        rel="noreferrer"
      >
        Privacy Policy
      </Text>
    </Text>
  );
};

export default RevuePolicy;
