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

import { Box } from "@chakra-ui/layout";
import { AnimatePresence } from "framer-motion";
import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import nookies from "nookies";
import React, { useEffect, useState } from "react";
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
import mp from "../services/mixpanel";
import Announcement from "../website/Banners/Announcement";

const Signup: NextPage = () => {
  const [withEmail, setWithEmail] = useState<boolean>(false);
  const { createToast } = useCustomToast();
  const router = useRouter();

  useEffect(() => {
    mp.track("Sign Up Page View");
  }, []);

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
      .then((res) => {
        mp.alias(res.user.email);
        return res;
      })
      .then((credentials) => {
        mp.identify(credentials.user.email);
        mp.track("Sign Up", { status: "success", provider: client });
        createToast("Account created successfully", "success");
        return router.push("/home");
      })
      .catch((e) => {
        mp.track("Sign Up", { status: "error", provider: client });
        createToast(`Couldn't sign up with ${client}`, "error", e.message);
      });
  };

  return (
    <>
      <SEO {...signupSeo} />
      {/* <Announcement /> */}
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

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  //Try to get token from cookies.
  const cookies = nookies.get(ctx);
  const token = cookies.token;

  //If the token exists always route to /home page.
  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: "/home"
      }
    };
  }

  //If no token then don't do anything
  return {
    props: {} as never
  };
};
