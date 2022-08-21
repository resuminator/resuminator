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
import { useCustomToast } from "../hooks/useCustomToast";
import { AuthProviderProps } from "../modules/Auth/AuthProviderCard";
import AuthProvidersList from "../modules/Auth/AuthProvidersList";
import AuthFormHeader from "../modules/Auth/FormHeader";
import SignUpWithEmail from "../modules/Auth/SignUpWithEmail";
import SEO from "../modules/SEO";
import { signupSeo } from "../modules/SEO/pages.config";
import firebaseSDK from "../services/firebase";
import mp from "../services/mixpanel";

import WideLayout from "../components/layouts/WideLayout";
import { signupBenefits } from "../data/SignupBenefits";
import InfoGraphic from "../modules/Auth/AuthBenefits";
import AuthFormFooter from "../modules/Auth/FormFooter";
import divider from "../styles/dividerWithText.module.css";

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

  const SignupOptions = () => {
    return (
      <AnimatePresence>
        {withEmail ? (
          <SignUpWithEmail resetClient={() => setWithEmail(false)} />
        ) : (
          <AuthProvidersList handleSignIn={handleSignIn} />
        )}
      </AnimatePresence>
    );
  };

  const SignupForm = () => {
    return (
      <Box
        display="flex"
        flexDir="column"
        p={{ base: "2rem", md: "4rem", lg: "3rem 6.5rem" }}
        flex="1 0"
        flexBasis="40%"
      >
        <AuthFormHeader
          title="Create, customize &amp; download single page resumes within minutes for free"
          hideTitle={withEmail}
        />
        {!withEmail && (
          <div className={divider.separator}>Sign up with Google or email</div>
        )}
        <SignupOptions />
        <AuthFormFooter page="SIGNUP" />
      </Box>
    );
  };

  return (
    <>
      <SEO {...signupSeo} />
      {/* <Announcement /> */}
      <WideLayout>
        <SignupForm />
        <InfoGraphic
          title="Sign up to craft your resume with the unique features of Resuminator"
          benefitList={signupBenefits}
        />
      </WideLayout>
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
