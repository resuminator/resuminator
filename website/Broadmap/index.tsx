import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import InputField from "../../components/common/InputField";
import { useCustomToast } from "../../hooks/useCustomToast";
import { useEmailValidation } from "../../hooks/useEmailValidation";

const gradient =
  "linear-gradient(90deg, rgba(0,0,139,1) 0%, rgba(148,0,116,1) 21%, rgba(215,0,92,1) 41%, rgba(251,105,69,1) 61%, rgba(255,179,67,1) 82%, rgba(249,248,113,1) 100%)";

const Broadmap = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail] = useEmailValidation(email);
  const { createToast } = useCustomToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.length)
      return createToast(
        "Please enter an email to subscribe",
        "error",
        "This will be your primary email where we will send you the newsletter."
      );

    if (!isValidEmail)
      return createToast(
        "This email seems invalid",
        "error",
        "Please check the email and try again."
      );

    createToast(
      "Successully subscribed you to Broadmap",
      "success",
      "Enjoy handpicked resouces every Monday right from your inbox!"
    );
  };

  return (
    <Center m="8" p="4" bgGradient={gradient} borderRadius="xl">
      <Box bg="white" borderRadius="xl" p="8" minH="100%" minW="100%">
        <Heading mb="8" letterSpacing="tight">
          Say hello to <s>roadmaps</s> broadmaps!
        </Heading>
        <Text mb="8">
          A broadmap like a <em>&ldquo;playlist&rdquo;</em> of resources curated
          from all over the internet, which we ship as a newsletter to your
          inbox every Monday morning.
        </Text>
        <Box as="form" onSubmit={handleSubscribe}>
          <InputField
            label="Subscribe to Broadmap"
            placeholder="Your email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isValid={isValidEmail}
            variant="filled"
          />
          <Button
            type="submit"
            rightIcon={<FiMail />}
            isFullWidth
            colorScheme="pink"
            loadingText="Subscribing"
          >
            Sign me up
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default Broadmap;
