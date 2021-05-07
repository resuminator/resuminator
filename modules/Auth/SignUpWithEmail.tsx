import { Button } from "@chakra-ui/button";
import { SyntheticEvent, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import InputField from "../../components/common/InputField";
import MotionBox from "../../components/layouts/MotionBox";
import { useEmailValidation } from "../../hooks/useEmailValidation";
import { usePasswordValidation } from "../../hooks/usePasswordValidation";
import PasswordHints from "./PasswordHints";

export interface FormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface Props {
  resetClient: () => void;
  formValues: FormValues;
  formHandler: (e: SyntheticEvent) => void;
  submitHandler?: () => void;
}

const SignUpWithEmail: React.FC<Props> = ({
  resetClient,
  formValues,
  formHandler,
  submitHandler,
}) => {
  const [
    validLength,
    hasNumber,
    upperCase,
    lowerCase,
    match,
  ] = usePasswordValidation(formValues.password, formValues.confirmPassword);
  const [showHints, setShowHints] = useState(false);
  const [showConfirmHint, setShowConfirmHint] = useState(false);
  const [validEmail, errorMessage] = useEmailValidation(formValues.email);
  const [showEmailError, setShowEmailError] = useState(false);

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <InputField
        label="Full Name"
        name="fullName"
        value={formValues.fullName}
        type="text"
        onChange={formHandler}
      />
      <InputField
        label="Email"
        name="email"
        value={formValues.email}
        type="email"
        onChange={formHandler}
        isValid={validEmail}
        error={{ show: showEmailError && !validEmail, message: errorMessage }}
        onFocus={() => setShowEmailError(true)}
      />
      <InputField
        label="Password"
        name="password"
        value={formValues.password}
        type="password"
        onChange={formHandler}
        onFocus={() => setShowHints(true)}
        onBlur={() => setShowHints(false)}
      />
      {showHints ? (
        <PasswordHints
          validators={{ validLength, hasNumber, upperCase, lowerCase }}
        />
      ) : null}
      <InputField
        label="Confirm Password"
        name="confirmPassword"
        value={formValues.confirmPassword}
        type="password"
        onChange={formHandler}
        onFocus={() => setShowConfirmHint(true)}
        onBlur={() => setShowConfirmHint(false)}
      />
      {showConfirmHint && !match ? (
        <PasswordHints
          hints={[{ message: "Passwords don't match", validator: match }]}
        />
      ) : null}
      <Button
        isFullWidth
        variant="solid"
        colorScheme="blue"
        textAlign="center"
        mb="4"
        onClick={submitHandler}
      >
        Create new account
      </Button>
      <Button isFullWidth variant="link" onClick={resetClient} my="2">
        <FaChevronLeft style={{ paddingRight: "8px" }} /> Back to all options
      </Button>
    </MotionBox>
  );
};

export default SignUpWithEmail;
