import {
  Box,
  GridItem,
  Text,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import InputField from "../../../components/common/InputField";
import InputWithLabel from "../../../components/common/InputWithLabel";
import { usePasswordValidation } from "../../../hooks/usePasswordValidation";
import PasswordHints from "../../Auth/PasswordHints";

const ChangePassword = () => {
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [validLength, hasNumber, upperCase, lowerCase, match] =
    usePasswordValidation(password.new, password.confirm);
  const [showHints, setShowHints] = useState(false);
  const [showConfirmHint, setShowConfirmHint] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    const [key, value] = [e.target.name, e.target.value];
    setPassword({ ...password, [key]: value });
  };

  const handleSubmit = () => {
    console.log(password);
  };

  return (
    <Box mb="8">
      <BoxHeader
        title="Change Password"
        size={{ title: "lg", subtitle: "sm" }}
        mb="2.5"
      />
      <InputField
        label="Current Password"
        name="current"
        value={password.current}
        type="password"
        onChange={handleForm}
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
        <Button colorScheme="blue" my="2" size="sm" onClick={handleSubmit}>
          Update password
        </Button>
        <Button
          colorScheme="blue"
          fontWeight="normal"
          variant="link"
          my="2"
          size="sm"
        >
          Forgot Password?
        </Button>
      </ButtonGroup>
      <Text fontSize="sm" color="gray" mb="2">
        You will need to login again once you change your password
      </Text>
      <Divider />
    </Box>
  );
};

export default ChangePassword;
