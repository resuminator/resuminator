import { Box, Text } from "@chakra-ui/layout";
import { NextPage } from "next";
import React from "react";
import Layout from "../components/layouts";

const Login: NextPage = () => {
  return (
    <Layout>
      <Box flex="1 0" flexBasis="50%" bg="red">
        <Text fontSize="4xl">Col 1</Text>
      </Box>
      <Box flexBasis="50%" bg="blue">
        <Text fontSize="4xl">Col 2</Text>
      </Box>
    </Layout>
  );
};

export default Login;
