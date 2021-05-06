import { Box, Text } from "@chakra-ui/layout";
import { NextPage } from "next";
import React from "react";
import { TwoColumn } from "../components/layouts";

const Login: NextPage = () => {
  return (
    <TwoColumn>
      <Box flexBasis="50%">
        <Text fontSize="4xl">Col 1</Text>
      </Box>
      <Box flexBasis="50%">
        <Text fontSize="4xl">Col 2</Text>
      </Box>
    </TwoColumn>
  );
};

export default Login;
