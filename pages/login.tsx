import { Box, Text } from "@chakra-ui/layout";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { NextPage } from "next";
import React, { useState } from "react";
import BoxHeader from "../components/common/BoxHeader";
import Layout from "../components/layouts";
import LogoWithText from "../components/layouts/LogoWithText";
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
        <LogoWithText hasTagline />
      </Box>
      <Box
        display="flex"
        flexDir="column"
        p={{ base: "2rem", md: "4rem", lg: "4rem 2rem" }}
        flex="1 0"
        flexBasis="40%"
      >
        <LogoWithText display={{ base: "inherit", lg: "none" }} />
        <BoxHeader title={"Welcome Back 👋🏻"} subtitle="Log in to Resuminator" />
        <AnimatePresence>
          {client === "Email" ? (
            <LogInWithEmail resetClient={() => setClient(null)} />
          ) : (
            <AuthProvidersList setClient={setClient} />
          )}
        </AnimatePresence>
        <Box textAlign="center" my="4" fontSize={{ base: "sm", md: "md" }}>
          <PageToggle page="LOGIN" />
          <PrivacyNotice />
        </Box>
      </Box>
    </Layout>
  );
};

export default Login;
