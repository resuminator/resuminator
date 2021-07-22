import { Box, Button, ButtonGroup, Divider, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import InputField from "../../../components/common/InputField";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { usePasswordValidation } from "../../../hooks/usePasswordValidation";
import { Status } from "../../../utils/constants";
import { useAuth } from "../../Auth/AuthContext";
import PasswordHints from "../../Auth/PasswordHints";

const ChangePassword = () => {
  const auth = useAuth();
  const [status, setStatus] = useState<Status>(Status.idle);
  const [password, setPassword] = useState({
    new: "",
    confirm: "",
  });
  const [validLength, hasNumber, upperCase, lowerCase, match] =
    usePasswordValidation(password.new, password.confirm);
  const [showHints, setShowHints] = useState(false);
  const [showConfirmHint, setShowConfirmHint] = useState(false);
  const { createToast } = useCustomToast();

  const handleForm = (e) => {
    e.preventDefault();
    const [key, value] = [e.target.name, e.target.value];
    setPassword({ ...password, [key]: value });
  };

  /**
   * Handles the password update request from Firebase
   * @returns Promise | Toast
   */
  const handleSubmit = async () => {
    setStatus(Status.loading);
    try {
      return await auth.user
        .updatePassword(password.new)
        .then(() => {
          setStatus(Status.success);
          return createToast(
            "Password updated successfully",
            "success",
            "You can now sign in with your new password"
          );
        })
        .catch((err) => {
          setStatus(Status.error);
          return createToast("Couldn't update password", "error", err.message);
        });
    } catch {
      setStatus(Status.error);
      return createToast(
        "Couldn't update password",
        "error",
        "An error occured while performin this request"
      );
    }
  };

  //Condition for keeping the update password button disabled
  const isDisabled =
    Object.values(password).some((v) => !v.length) ||
    !(validLength && hasNumber && upperCase && lowerCase && match);

  return (
    <Box mb="8">
      <BoxHeader
        title="Change Password"
        size={{ title: "lg", subtitle: "sm" }}
        mb="2.5"
      />
      <InputField
        label="Password"
        name="new"
        value={password.new}
        type="password"
        onChange={handleForm}
        onFocus={() => setShowHints(true)}
        onBlur={() => setShowHints(false)}
        placeholder="8+ characters"
      />
      {showHints ? (
        <PasswordHints
          validators={{ validLength, hasNumber, upperCase, lowerCase }}
        />
      ) : null}
      <InputField
        label="Confirm Password"
        name="confirm"
        value={password.confirm}
        type="password"
        onChange={handleForm}
        onFocus={() => setShowConfirmHint(true)}
        onBlur={() => setShowConfirmHint(false)}
      />
      {showConfirmHint && !match ? (
        <PasswordHints
          hints={[{ message: "Passwords don't match", validator: match }]}
        />
      ) : null}
      <ButtonGroup spacing="4">
        <Button
          colorScheme="blue"
          my="2"
          size="sm"
          onClick={handleSubmit}
          isDisabled={isDisabled}
          isLoading={status === Status.loading}
          loadingText="Updating Password"
        >
          Update password
        </Button>
        <Link href="/LoginHelp">
          <Button
            colorScheme="blue"
            fontWeight="normal"
            variant="link"
            my="2"
            size="sm"
          >
            Forgot Password?
          </Button>
        </Link>
      </ButtonGroup>
      <Text fontSize="sm" color="gray" mb="2">
        You will be logged out of Resuminator on all the other devices once you
        successfully update your password
      </Text>
      <Divider />
    </Box>
  );
};

export default ChangePassword;
