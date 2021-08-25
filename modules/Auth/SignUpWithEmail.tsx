import { Button } from "@chakra-ui/button";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import InputField from "../../components/common/InputField";
import MotionBox from "../../components/layouts/MotionBox";
import { BASE_URL } from "../../data/RefLinks";
import { useCustomToast } from "../../hooks/useCustomToast";
import { useEmailValidation } from "../../hooks/useEmailValidation";
import { usePasswordValidation } from "../../hooks/usePasswordValidation";
import firebaseSDK from "../../services/firebase";
import mp from "../../services/mixpanel";
import { Status } from "../../utils/constants";
import PasswordHints from "./PasswordHints";

export interface FormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface Props {
  resetClient: () => void;
}

const SignUpWithEmail: React.FC<Props> = ({ resetClient }) => {
  const [status, setStatus] = useState<Status>(Status.idle);
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validLength, hasNumber, upperCase, lowerCase, match] =
    usePasswordValidation(formValues.password, formValues.confirmPassword);
  const [showHints, setShowHints] = useState(false);
  const [showConfirmHint, setShowConfirmHint] = useState(false);
  const [validEmail, errorMessage] = useEmailValidation(formValues.email);
  const [showEmailError, setShowEmailError] = useState(false);
  const { createToast } = useCustomToast();
  const router = useRouter();

  const handleForm = (e) => {
    e.preventDefault();
    const [key, value] = [e.target.name, e.target.value];
    setFormValues({ ...formValues, [key]: value });
  };

  const handleSubmit = () => {
    setStatus(Status.loading);

    firebaseSDK
      .auth()
      .createUserWithEmailAndPassword(formValues.email, formValues.password)
      .then(async (response) => {
        //Update display name of user
        await response.user.updateProfile({ displayName: formValues.fullName });
        return response;
      })
      .then(async (response) => {
        //Assigning an alias to the user on Mixpanel
        mp.alias(response.user.email);
        
        //Sending verification email with redirecting url
        response.user.sendEmailVerification({
          url: `${BASE_URL}/login`,
        });

        //when done set status to success and create toast
        setStatus(Status.success);
        createToast(
          "Account created successfully",
          "success",
          "Verify your email and log in with your new account. Make sure to check your spam/junk folder."
        );

        //Since firebase signs the user in, and we don't need unverified users, hence log out.
        await firebaseSDK.auth().signOut();
        //Finally route to login with email and verified status.
        return router.push("/login");
      })
      .catch((e) => {
        setStatus(Status.error);
        createToast(
          "Could not create account with this email",
          "error",
          e.message
        );
      });
  };

  const isDisabled =
    Object.values(formValues).some((v) => !v.length) ||
    !(
      validEmail &&
      validLength &&
      hasNumber &&
      upperCase &&
      lowerCase &&
      match
    );

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
        onChange={handleForm}
        placeholder="Tony Stark"
      />
      <InputField
        label="Email"
        name="email"
        value={formValues.email}
        type="email"
        onChange={handleForm}
        isValid={validEmail}
        error={{ show: showEmailError && !validEmail, message: errorMessage }}
        onFocus={() => setShowEmailError(true)}
        placeholder="example@xyz.com"
      />
      <InputField
        label="Password"
        name="password"
        value={formValues.password}
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
        name="confirmPassword"
        value={formValues.confirmPassword}
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
      <Button
        isFullWidth
        variant="solid"
        colorScheme="blue"
        textAlign="center"
        mb="4"
        isLoading={status === Status.loading}
        loadingText="Creating New Account"
        isDisabled={isDisabled}
        onClick={handleSubmit}
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
