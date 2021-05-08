import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";
import BoxHeader from "../components/common/BoxHeader";
import InputField from "../components/common/InputField";
import ScreenCenter from "../components/layouts/ScreenCenter";
import { useEmailValidation } from "../hooks/useEmailValidation";

const LoginHelp: NextPage = () => {
  const [email, setEmail] = useState("");
  const [validEmail, errorMessage] = useEmailValidation(email);
  const [showError, setShowError] = useState(false);
  const toast = useToast();

  const handleInputField = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    //handle forgot password logic here
    console.log(email);
    toast({
      title: "Email Sent",
      description:
        "Check your inbox for further instructions. You may return to log in page now.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <ScreenCenter>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        p={{ base: "2rem", md: "4rem" }}
        borderRadius="10px"
        shadow="lg"
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
        />
        <Button
          fontWeight="medium"
          variant="solid"
          colorScheme="purple"
          mt="2"
          onClick={handleSubmit}
        >
          <AiOutlineMail style={{ marginRight: "8px" }} /> Send Instructions
        </Button>
        <Link href="/login">
          <Button
            fontWeight="medium"
            colorScheme="blackAlpha"
            variant="ghost"
            my="4"
          >
            <FaChevronLeft style={{ paddingRight: "8px" }} /> Back to log in
            page
          </Button>
        </Link>
      </Box>
    </ScreenCenter>
  );
};

export default LoginHelp;
