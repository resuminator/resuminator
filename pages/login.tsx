import { Box } from "@chakra-ui/layout";
import { AnimatePresence } from "framer-motion";
import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import BoxHeader from "../components/common/BoxHeader";
import Layout from "../components/layouts";
import { LogoWithText } from "../components/layouts/Logos";
import { useCustomToast } from "../hooks/useCustomToast";
import { AuthProviderProps } from "../modules/Auth/AuthProviderCard";
import AuthProvidersList from "../modules/Auth/AuthProvidersList";
import LogInWithEmail from "../modules/Auth/LoginWithEmail";
import PageToggle from "../modules/Auth/PageToggle";
import PrivacyNotice from "../modules/Auth/PrivacyNotice";
import firebaseSDK from "../services/firebase";
import nookies from "nookies";
import { coldStartServer } from "../apis/server";

const Login: NextPage = () => {
  const [withEmail, setWithEmail] = useState<boolean>(false);
  const { createToast } = useCustomToast();
  const router = useRouter();

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
      .then(() => {
        createToast("Logged in successfully", "success");
        return router.push("/home");
      })
      .catch((e) =>
        createToast(`Couldn't sign in with ${client}`, "error", e.message)
      );
  };

  return (
    <Layout hasHeaderHidden>
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
          {withEmail ? (
            <LogInWithEmail resetClient={() => setWithEmail(false)} />
          ) : (
            <AuthProvidersList handleSignIn={handleSignIn} />
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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  //Try to get token from cookies.
  const cookies = nookies.get(ctx);
  const token = cookies.token;

  await coldStartServer();

  //If the token exists always route to /home page.
  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  //If no token then don't do anything
  return {
    props: {} as never,
  };
};
