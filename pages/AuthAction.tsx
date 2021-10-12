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
import { Center, Icon, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import BoxHeader from "../components/common/BoxHeader";
import Footer from "../components/layouts/Footer";
import ScreenCenter from "../components/layouts/ScreenCenter";
import ResetPassword from "../modules/Auth/ResetPassword";
import VerifyEmail from "../modules/Auth/VerifyEmail";
import SEO from "../modules/SEO";
import mp from "../services/mixpanel";

interface ActionProps {
  mode?: string;
  oobCode?: string;
  continueUrl?: string;
}

//Decides which action to render depending on the mode param given by Firebase.
const Action: React.FC<ActionProps> = ({ mode, oobCode, continueUrl }) => {
  switch (mode) {
    case "resetPassword":
      return <ResetPassword actionCode={oobCode} />;
    case "verifyEmail":
      return <VerifyEmail actionCode={oobCode} continueUrl={continueUrl} />;
  }
};

const getPageTitle = (mode: ActionProps["mode"]) => {
  switch (mode) {
    case "resetPassword":
      return "Reset your password";
    case "verifyEmail":
      return "Verify your email";
    default:
      return "Auth Action";
  }
};

const AuthAction: NextPage<ActionProps> = ({ mode, oobCode, continueUrl }) => {
  useEffect(() => {
    mp.track("Auth Action Page View");
  }, []);

  return (
    <>
      <SEO title={getPageTitle(mode)} />
      <ScreenCenter>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          p={{ base: "2rem", md: "4rem" }}
          borderRadius="10px"
          shadow={useColorModeValue("lg", "2xl")}
          flexBasis={{ base: "90%", md: "60%", lg: "40%" }}
        >
          {mode && oobCode ? (
            <Action
              mode={mode.toString()}
              oobCode={oobCode.toString()}
              continueUrl={continueUrl.toString()}
            />
          ) : (
            <Center>
              <BoxHeader
                title="Area 51 : Access Restricted"
                subtitle="Invalid Auth Action Error. ERR_CODE: 403 Forbidden"
                mb="0"
              />
              <Icon
                as={FiAlertTriangle}
                boxSize="4rem"
                m="4"
                color="yellow.500"
              />
            </Center>
          )}
        </Box>
      </ScreenCenter>
      <Footer />
    </>
  );
};

export default AuthAction;

export const getServerSideProps = async ({ query }) => {
  const mode = query.mode || "";
  const oobCode = query.oobCode || "";
  const continueUrl = query.continueUrl || "/login";
  return {
    props: { mode, oobCode, continueUrl }
  };
};
