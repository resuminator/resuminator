import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import BoxHeader from "../components/common/BoxHeader";
import InputField from "../components/common/InputField";
import Footer from "../components/layouts/Footer";
import ScreenCenter from "../components/layouts/ScreenCenter";
import { useEmailValidation } from "../hooks/useEmailValidation";
import firebaseSDK from "../services/firebase";

export enum Status {
  loading,
  idle,
  error,
  success,
}

const LoginHelp: NextPage = () => {
  const [email, setEmail] = useState("");
  const [validEmail, errorMessage] = useEmailValidation(email);
  const [status, setStatus] = useState<Status>(Status.idle);
  const [showError, setShowError] = useState(false);
  const toast = useToast();

  const handleInputField = (e) => {
    setEmail(e.target.value);
  };

  const handleKeyPress = (e) => {
    //Submit on capturing Enter key (code = 13)
    if (e.keyCode === 13) handleSubmit();
  };

  const handleSubmit = () => {
    setStatus(Status.loading);
    firebaseSDK
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setStatus(Status.success);
        toast({
          title: "Password reset instructions sent",
          description: `Check your inbox for further instructions. You may return to log in page now.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        setStatus(Status.error);
        toast({
          title: "Could not send password reset instructions",
          description: err.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

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
          <BoxHeader
            title="Forgot Password?"
            subtitle="Enter your email for instructions on resetting your password"
          />
          <InputField
            label="Email"
            type="email"
            onChange={handleInputField}
            isValid={validEmail}
            error={{ message: errorMessage, show: showError && !validEmail }}
            onFocus={() => setShowError(true)}
            onKeyDown={handleKeyPress}
          />
          <Button
            fontWeight="medium"
            variant="solid"
            colorScheme="purple"
            mt="2"
            onClick={handleSubmit}
            isLoading={status === Status.loading}
            isDisabled={!validEmail}
            type="submit"
          >
            <AiOutlineMail style={{ marginRight: "8px" }} /> Send Instructions
          </Button>
          <Link href="/login">
            <Button
              fontWeight="medium"
              colorScheme={useColorModeValue("blackAlpha", "gray")}
              variant="ghost"
              my="4"
            >
              <FaChevronLeft style={{ paddingRight: "8px" }} /> Back to log in
              page
            </Button>
          </Link>
        </Box>
      </ScreenCenter>
      <Footer />
    </>
  );
};

export default LoginHelp;
