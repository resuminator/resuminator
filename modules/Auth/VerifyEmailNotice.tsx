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

import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  onClick?: () => void;
}

const VerifyEmailNotice: React.FC<Props> = ({ onClick }) => {
  const router = useRouter();
  const { email, verified } = router.query;

  const props = {
    bg: useColorModeValue("orange.50", "orange.900"),
    color: useColorModeValue("orange.500", "orange.200")
  };

  return (
    verified === "false" && (
      <Box
        width="100%"
        minHeight="4rem"
        borderRadius="10px"
        border="1px solid"
        borderColor="orange"
        bg={props.bg}
        p="4"
        mb="2"
      >
        <Text fontSize="sm" color={props.color} mb="2">
          Your email - {email} is not verified yet. Please verify your email by
          following the instructions sent to your inbox. <br /> Did not receive
          the instructions?
        </Text>
        <Button
          size="sm"
          variant="link"
          colorScheme="orange"
          _focus={{ outline: "none" }}
          onClick={onClick}
        >
          Resend Verification Email
        </Button>
      </Box>
    )
  );
};

export default VerifyEmailNotice;
