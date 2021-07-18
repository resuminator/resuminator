import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { FiLock } from "react-icons/fi";
import BoxHeader from "../../components/common/BoxHeader";
import InputField from "../../components/common/InputField";
import { useCustomToast } from "../../hooks/useCustomToast";
import { usePasswordValidation } from "../../hooks/usePasswordValidation";
import firebaseSDK from "../../services/firebase";
import { Status } from "../../utils/constants";
import PasswordHints from "./PasswordHints";

interface ResetPasswordProps {
  actionCode: string;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ actionCode }) => {
  const router = useRouter();
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

  const handleKeyPress = (e) => {
    //Submit on capturing Enter key (code = 13)
    if (e.keyCode === 13) handleReset();
  };

  const handleReset = () => {
    setStatus(Status.loading);

    //Step 1 - Verify the Action Code (OOB Code)
    firebaseSDK
      .auth()
      .verifyPasswordResetCode(actionCode.toString())
      .then(() =>
        //Step 2 - If verification Success,
        //Then confirm the password reset by passing in the new password.
        firebaseSDK
          .auth()
          .confirmPasswordReset(actionCode.toString(), password.new)
          .then(() => {
            //If Success then show toast and redirect to login
            setStatus(Status.success);
            createToast(
              "Password Updated Successfully!",
              "success",
              "Redirecting to login page. You can now login with your new password."
            );
            router.push("/login");
          })
          .catch((error) => {
            //If Failure, then show error and don't do anything
            setStatus(Status.error);
            createToast(
              "Could not update password. Request a new link from the login page",
              "error",
              error.message
            );
          })
      )
      .catch((error) => {
        //This catch runs if the action code could not be verified
        setStatus(Status.error);
        createToast("Invalid or Expired Code", "error", error.message);
      });
  };

  //Condition for keeping the update password button disabled
  const isDisabled =
    Object.values(password).some((v) => !v.length) ||
    !(validLength && hasNumber && upperCase && lowerCase && match);

  return (
    <Fragment>
      <BoxHeader
        title="Reset Password"
        subtitle="Enter new password for your account"
      />
      <InputField
        label="New Password"
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
          validators={{
            validLength,
            hasNumber,
            upperCase,
            lowerCase,
          }}
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
        onKeyDown={handleKeyPress}
      />
      {showConfirmHint && !match ? (
        <PasswordHints
          hints={[{ message: "Passwords don't match", validator: match }]}
        />
      ) : null}
      <Button
        fontWeight="medium"
        variant="solid"
        colorScheme="purple"
        mt="2"
        onClick={handleReset}
        isLoading={status === Status.loading}
        isDisabled={isDisabled}
        type="submit"
        leftIcon={<FiLock />}
      >
        Update Password
      </Button>
    </Fragment>
  );
};

export default ResetPassword;
