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
import { coldStartServer } from "../apis/server";
import BoxHeader from "../components/common/BoxHeader";
import Layout from "../components/layouts";
import { LogoWithText } from "../components/layouts/Logos";
import { useCustomToast } from "../hooks/useCustomToast";
import { AuthProviderProps } from "../modules/Auth/AuthProviderCard";
import AuthProvidersList from "../modules/Auth/AuthProvidersList";
import LogInWithEmail from "../modules/Auth/LoginWithEmail";
import PageToggle from "../modules/Auth/PageToggle";
import PrivacyNotice from "../modules/Auth/PrivacyNotice";
import SEO from "../modules/SEO";
import { loginSeo } from "../modules/SEO/pages.config";
import firebaseSDK from "../services/firebase";
import mp from "../services/mixpanel";
import Announcement from "../website/Banners/Announcement";

const Login: NextPage = () => {
  const [withEmail, setWithEmail] = useState<boolean>(false);
  const { createToast } = useCustomToast();
  const router = useRouter();

  useEffect(() => {
    coldStartServer();
    mp.track("Login Page View");
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
      .then((res) => {
        mp.identify(res.user.email);
        mp.track("Log In", {
          status: "success",
          provider: client,
          source: "Firebase"
        });
        createToast("Logged in successfully", "success");
        return router.push("/home");
      })
      .catch((e) => {
        mp.track("Log In", {
          status: "error",
          provider: client,
          source: "Firebase"
        });
        createToast(`Couldn't sign in with ${client}`, "error", e.message);
      });
  };

  return (
    <>
      <SEO {...loginSeo} />
      <Announcement />
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
          <BoxHeader
            title={"Welcome Back 👋🏻"}
            subtitle="Log in to Resuminator"
          />
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
    </>
  );
};

export default Login;

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
