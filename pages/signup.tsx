import { Box } from "@chakra-ui/layout";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import BoxHeader from "../components/common/BoxHeader";
import Layout from "../components/layouts";
import LogoWithText from "../components/layouts/LogoWithText";
import AuthProvidersList from "../modules/Auth/AuthProvidersList";
import PageToggle from "../modules/Auth/PageToggle";
import PrivacyNotice from "../modules/Auth/PrivacyNotice";
import SignUpWithEmail from "../modules/Auth/SignUpWithEmail";

const Signup = () => {
  const [client, setClient] = useState(null);

  return (
    <Layout>
      <Box
        display="flex"
        flexDir="column"
        p={{ base: "2rem", md: "4rem", lg: "4rem 2rem" }}
        flex="1 0"
        flexBasis="40%"
      >
        <LogoWithText display={{ base: "inherit", lg: "none" }} />
        <BoxHeader
          title={"Hi, nice to see you 👋🏻"}
          subtitle="Create a new account"
        />
        <AnimatePresence>
          {client === "Email" ? (
            <SignUpWithEmail resetClient={() => setClient(null)} />
          ) : (
            <AuthProvidersList setClient={setClient} />
          )}
        </AnimatePresence>
        <Box textAlign="center" my="4" fontSize={{ base: "sm", md: "md" }}>
          <PageToggle page="SIGNUP" />
          <PrivacyNotice />
        </Box>
      </Box>
      <Box
        display={{ base: "none", lg: "inherit" }}
        flexDir="column"
        flex="1 0"
        flexBasis="60%"
        p={{ base: "2rem", md: "4rem", lg: "4rem 2rem" }}
      >
        <LogoWithText hasTagline />
      </Box>
    </Layout>
  );
};

export default Signup;
