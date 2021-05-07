import { Box, Text } from "@chakra-ui/layout";
import { NextPage } from "next";
import React, { Fragment, useEffect, useState } from "react";
import InputField from "../components/common/InputField";
import Layout from "../components/layouts";
import AuthProvidersList from "../modules/Auth/AuthProvidersList";

const Login: NextPage = () => {
  const [client, setClient] = useState(null);

  useEffect(() => console.log(client), [client]);

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
        <AuthProvidersList setClient={setClient} />
      </Box>
    </Layout>
  );
};

export const LogInWithEmail = () => (
  <Fragment>
    <InputField label="Email" />
    <InputField label="Password" />
  </Fragment>
);

export default Login;
