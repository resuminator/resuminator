import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { addSubscriber } from "../../apis/broadmap";
import InputField from "../../components/common/InputField";
import { useCustomToast } from "../../hooks/useCustomToast";
import { useEmailValidation } from "../../hooks/useEmailValidation";
import { Status } from "../../utils/constants";
import RevuePolicy from "./RevuePolicy";

interface Props {
  status: Status;
  setStatus: (status: Status) => void;
}

const SubscribeForm: React.FC<Props> = ({ status, setStatus }) => {
  const [email, setEmail] = useState("");
  const [isValidEmail] = useEmailValidation(email);
  const { createToast } = useCustomToast();

  const handleSubscribe = async (e) => {
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

    setStatus(Status.loading);
    return await addSubscriber({ email })
      .then(() => {
        setStatus(Status.success);
        createToast(
          `Subscription confirmation email sent to ${email}`,
          "success",
          "Follow the link in the email to confirm your subscription"
        );
      })
      .catch(() => {
        setStatus(Status.error);
        createToast(
          "Could not subscribe you to Broadmap",
          "warning",
          "This error can mean that either you're already subscribed or you have not confirmed your Broadmap subscription."
        );
      });
  };

  return (
    <Box as="form" flexBasis={{ md: "50%", lg: "40%" }} alignSelf="center">
      <InputField
        label="Subscribe to Broadmap"
        placeholder="Your email address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isValid={isValidEmail}
        variant="filled"
        labelProps={{
          color: useColorModeValue("blackAlpha.700", "whiteAlpha.600"),
        }}
      />
      <Button
        type="submit"
        rightIcon={<FiMail />}
        isFullWidth
        colorScheme="pink"
        loadingText="Subscribing"
        isLoading={status === Status.loading}
        onClick={handleSubscribe}
      >
        Sign me up
      </Button>
      <RevuePolicy />
    </Box>
  );
};

export default SubscribeForm;
