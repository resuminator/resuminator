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
import { useEffect, useState } from "react";
import { coldStartServer } from "../apis/server";
import { useCustomToast } from "../hooks/useCustomToast";
import { AuthProviderProps } from "../modules/Auth/AuthProviderCard";
import AuthProvidersList from "../modules/Auth/AuthProvidersList";
import LogInWithEmail from "../modules/Auth/LoginWithEmail";
import SEO from "../modules/SEO";
import { loginSeo } from "../modules/SEO/pages.config";
import firebaseSDK from "../services/firebase";
import mp from "../services/mixpanel";

import WideLayout from "../components/layouts/WideLayout";
import { loginBenefits } from "../data/LoginBenefits";
import InfoGraphic from "../modules/Auth/AuthBenefits";
import AuthFormFooter from "../modules/Auth/FormFooter";
import AuthFormHeader from "../modules/Auth/FormHeader";
import divider from "../styles/dividerWithText.module.css";

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

  const LoginOptions = () => {
    return (
      <AnimatePresence>
        {withEmail ? (
          <LogInWithEmail resetClient={() => setWithEmail(false)} />
        ) : (
          <AuthProvidersList handleSignIn={handleSignIn} />
        )}
      </AnimatePresence>
    );
  };

  const LoginForm = () => {
    return (
      <Box
        display="flex"
        flexDir="column"
        p={{ base: "2rem", md: "4rem", lg: "3rem 6.5rem" }}
        flex="1 0"
        flexBasis="40%"
      >
        <AuthFormHeader
          title="Welcome Back! Craft your resume &amp; apply to your dream job 2x
          faster!"
          hideTitle={withEmail}
        />
        {!withEmail && <div className={divider.separator}>Login with Google or email</div>}
        <LoginOptions />
        <AuthFormFooter page="LOGIN" />
      </Box>
    );
  };

  return (
    <>
      <SEO {...loginSeo} />
      {/* <Announcement /> */}
      <WideLayout>
        <InfoGraphic
          title="Log in to craft your resume and boost productivity with Resuminator"
          benefitList={loginBenefits}
        />
        <LoginForm />
      </WideLayout>
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
