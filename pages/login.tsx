import { Box, Text } from "@chakra-ui/layout";
import { NextPage } from "next";
import React, { useState } from "react";
import BoxHeader from "../components/common/BoxHeader";
import Layout from "../components/layouts";
import AuthProvidersList from "../modules/Auth/AuthProvidersList";
import LogInWithEmail from "../modules/Auth/LoginWithEmail";
import PageToggle from "../modules/Auth/PageToggle";
import PrivacyNotice from "../modules/Auth/PrivacyNotice";

const Login: NextPage = () => {
  const [client, setClient] = useState(null);

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
      >
        <BoxHeader title={"Welcome Back 👋🏻"} subtitle="Log in to Resuminator" />
        {client === "Email" ? (
          <LogInWithEmail resetClient={() => setClient(null)} />
        ) : (
          <AuthProvidersList setClient={setClient} />
        )}
        <Box textAlign="center" my="4" fontSize={{ base: "sm", md: "md" }}>
          <PageToggle page="LOGIN" />
          <PrivacyNotice />
        </Box>
      </Box>
    </Layout>
  );
};

export default Login;
