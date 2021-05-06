import { Box, Text } from "@chakra-ui/layout";
import { NextPage } from "next";
import React from "react";
import AuthProviderCard from "../components/common/AuthProviderCard";
import Layout from "../components/layouts";

const Login: NextPage = () => {
  return (
    <Layout>
      <Box
        display={{ base: "none", lg: "inherit" }}
        flexDir="column"
        flex="1 0"
        flexBasis="60%"
        p={{ base: "2rem", md: "4rem", lg: "4rem 2rem" }}
      >
        <Text fontSize="2xl" fontWeight="semibold" color="blue.800">
          Resuminator
        </Text>
        <Text fontSize="sm" color="blue.500">
          Build beautiful single-page resumes within minutes
        </Text>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        p={{ base: "2rem", md: "4rem", lg: "4rem 2rem" }}
        flex="1 0"
        flexBasis="40%"
        bg="whiteAlpha.100"
      >
        <AuthProviderCard client="Google" />
        <AuthProviderCard client="Twitter" />
        <AuthProviderCard client="GitHub" />
        <AuthProviderCard client="Email" />
      </Box>
    </Layout>
  );
};

export default Login;
