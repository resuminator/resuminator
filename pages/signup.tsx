import { Box } from "@chakra-ui/layout";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import BoxHeader from "../components/common/BoxHeader";
import Layout from "../components/layouts";
import { LogoWithText } from "../components/layouts/Logos";
import { useCustomToast } from "../hooks/useCustomToast";
import { AuthProviderProps } from "../modules/Auth/AuthProviderCard";
import AuthProvidersList from "../modules/Auth/AuthProvidersList";
import PageToggle from "../modules/Auth/PageToggle";
import PrivacyNotice from "../modules/Auth/PrivacyNotice";
import SignUpWithEmail from "../modules/Auth/SignUpWithEmail";
import SEO from "../modules/SEO";
import { signupSeo } from "../modules/SEO/pages.config";
import firebaseSDK from "../services/firebase";

const Signup = () => {
  const [withEmail, setWithEmail] = useState<boolean>(false);
  const { createToast } = useCustomToast();

  const getProvider = (c: AuthProviderProps["client"]) => {
    switch (c) {
      case "Google":
        return new firebaseSDK.auth.GoogleAuthProvider();
      case "GitHub":
        return new firebaseSDK.auth.GithubAuthProvider();
      default:
        return null;
    }
  };

  const handleSignIn = (client: AuthProviderProps["client"]) => {
    if (client === "Email") return setWithEmail(true);

    const provider = getProvider(client);
    firebaseSDK
      .auth()
      .signInWithPopup(provider)
      .then(() => createToast("Account created successfully", "success"))
      .catch((e) =>
        createToast(`Couldn't sign up with ${client}`, "error", e.message)
      );
  };

  return (
    <>
      <SEO {...signupSeo} />
      <Layout hasHeaderHidden>
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
            {withEmail ? (
              <SignUpWithEmail resetClient={() => setWithEmail(false)} />
            ) : (
              <AuthProvidersList handleSignIn={handleSignIn} />
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
    </>
  );
};

export default Signup;
