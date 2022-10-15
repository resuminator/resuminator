/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2022  Resuminator Authors

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

import { Box, Button, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaLock } from "react-icons/fa";
import { CohortProps } from "./types";

interface Props {}

const CohortAccessFallback: React.FC<{
  cohortData?: CohortProps;
  valueProp: string;
}> = ({ valueProp, cohortData = { cohort: "pro", color: "purple" } }) => {
  return (
    <Box
      width={"100%"}
      border="2px solid"
      borderColor={"purple.500"}
      borderRadius="lg"
      p="1rem"
      bgColor={useColorModeValue("purple.50", "purple.900")}
    >
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexDir="column"
      >
        <Icon
          as={FaLock}
          color={useColorModeValue("purple.500", "purple.300")}
          mb="2.5"
        />
        <Text fontWeight={"bold"} mb="1.5">
          This is a {cohortData.cohort} only feature
        </Text>
        {valueProp && (
          <Text textAlign={"center"} fontSize="xs" color="purple.100">
            {valueProp}
          </Text>
        )}
        <Button
          size={"sm"}
          colorScheme="purple"
          _focus={{
            outline: "none"
          }}
          mt="4"
        >
          Upgrade Plan
        </Button>
      </Box>
    </Box>
  );
};

export default CohortAccessFallback;
