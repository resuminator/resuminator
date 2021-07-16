import { Box } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";
import BoxHeader from "../components/common/BoxHeader";
import Footer from "../components/layouts/Footer";
import ScreenCenter from "../components/layouts/ScreenCenter";
import ResetPassword from "../modules/Auth/ResetPassword";
import VerifyEmail from "../modules/Auth/VerifyEmail";

export enum Status {
  loading,
  idle,
  error,
  success,
}

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

const AuthAction: NextPage<ActionProps> = ({ mode, oobCode, continueUrl }) => {
  return (
    <>
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
            <BoxHeader
              title="Cannot access this page"
              subtitle="Invalid Auth Action Error. ERR_CODE: 403 Forbidden"
              mb="0"
            />
          )}
        </Box>
      </ScreenCenter>
      <Footer />
    </>
  );
};

export default AuthAction;

export const getServerSideProps = async ({ query }) => {
  if (Object.keys(query).length) {
    const { mode, oobCode, continueUrl } = query;
    return {
      props: { mode, oobCode, continueUrl },
    };
  }
  return { props: { mode: null, oobCode: null, continueUrl: null } };
};
