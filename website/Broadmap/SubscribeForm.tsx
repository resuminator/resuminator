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

import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { addSubscriber } from "../../apis/broadmap";
import InputField from "../../components/common/InputField";
import { useCustomToast } from "../../hooks/useCustomToast";
import { useEmailValidation } from "../../hooks/useEmailValidation";
import mp from "../../services/mixpanel";
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
    if (!email.length) {
      mp.track("Broadmap", {
        action: "Subscribe CTA Trigger",
        status: "error",
        reason: "invalid email"
      });
      return createToast(
        "Please enter an email to subscribe",
        "error",
        "This will be your primary email where we will send you the newsletter."
      );
    }

    if (!isValidEmail) {
      mp.track("Broadmap", {
        action: "Subscribe CTA Trigger",
        status: "error",
        reason: "invalid email"
      });
      return createToast(
        "This email seems invalid",
        "error",
        "Please check the email and try again."
      );
    }

    mp.track("Broadmap", {
      action: "Subscribe CTA Trigger",
      status: "success"
    });
    setStatus(Status.loading);
    return await addSubscriber({ email })
      .then(() => {
        setStatus(Status.success);
        mp.track("Broadmap", { action: "Add Subscriber", status: "success" });
        createToast(
          `Subscription confirmation email sent to ${email}`,
          "success",
          "Follow the link in the email to confirm your subscription"
        );
      })
      .catch(() => {
        setStatus(Status.error);
        mp.track("Broadmap", { action: "Add Subscriber", status: "error" });
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
          color: useColorModeValue("blackAlpha.700", "whiteAlpha.600")
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
