import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import InputField from "../../components/common/InputField";
import LinkText from "../../components/common/LinkText";
import MotionBox from "../../components/layouts/MotionBox";
import { BASE_URL } from "../../data/RefLinks";
import { useCustomToast } from "../../hooks/useCustomToast";
import firebaseSDK from "../../services/firebase";
import { authPersist } from "../../services/firebase/persistence";
import { Status } from "../../utils/constants";
import VerifyEmailNotice from "./VerifyEmailNotice";

interface Props {
  resetClient: () => void;
}

const LogInWithEmail: React.FC<Props> = ({ resetClient }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);
  const persist = remember ? authPersist.local : authPersist.session;
  const [status, setStatus] = useState<Status>(Status.idle);
  const [user, setUser] = useState<firebase.default.User | null>(null);
  const { createToast } = useCustomToast();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRemember(e.target.checked);
  };

  const handleSubmit = () => {
    if (!(credentials.email && credentials.password))
      return createToast("Please enter valid email and password", "warning");
    setStatus(Status.loading);

    firebaseSDK
      .auth()
      .setPersistence(persist)
      .then(() =>
        firebaseSDK
          .auth()
          .signInWithEmailAndPassword(credentials.email, credentials.password)
          .then((response) => {
            //Set the user object from the response to perform consecutive actions like sending verification email
            setUser(response.user);

            //If in case the user email is not verfied, then logout the user and route to /login again
            if (!response.user.emailVerified) {
              router.push(
                `/login?email=${response.user.email}&verified=${response.user.emailVerified}`
              );
              firebaseSDK.auth().signOut();
              createToast(
                "Email not verified",
                "warning",
                `Please verify your email "${response.user.email}" to continue or use your Google or GitHub account to login`
              );
              return setStatus(Status.error);
            }

            //If email verified, then perform all the email success actions
            setStatus(Status.success);
            createToast("Logged in successfully", "success");
            router.push("/home")
          })
          .catch((e) => {
            setStatus(Status.error);
            createToast("Error while logging in", "error", e.message);
          })
      )
      .catch((e) => createToast("Error while logging in", "error", e.message));
  };

  const handleEmailVerification = () => {
    //If user is present, it means that the user tried to login once without verifying their account
    try {
      if (user) {
        //Send verification email with redirect url
        user.sendEmailVerification({
          url: `${BASE_URL}/login`,
        });
        return createToast(
          "Verification Email Sent!",
          "success",
          `Verify your email by following the link sent to your mail - ${user.email}`
        );
      }
    } catch {
      //If couldn't send verification email, then do this
      return createToast(
        "Couldn't send verification email",
        "error",
        "Try again in a minute and if the error persists contact us at hello@resuminator.in"
      );
    }
  };

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VerifyEmailNotice onClick={handleEmailVerification} />
      <InputField
        label="Email"
        name="email"
        value={credentials.email}
        type="email"
        onChange={handleChange}
      />
      <InputField
        label="Password"
        name="password"
        value={credentials.password}
        type="password"
        onChange={handleChange}
      />
      <Button
        isFullWidth
        variant="solid"
        colorScheme="blue"
        textAlign="center"
        mb="4"
        isLoading={status === Status.loading}
        loadingText="Logging in"
        onClick={handleSubmit}
      >
        Log In
      </Button>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="4"
        color="GrayText"
      >
        <Checkbox
          defaultChecked
          size="sm"
          width="fit-content"
          checked={remember}
          onChange={handleCheckbox}
        >
          Remember me
        </Checkbox>
        <LinkText fontSize="sm" href="/LoginHelp">
          Forgot Password?
        </LinkText>
      </Box>
      <Button isFullWidth variant="link" onClick={resetClient} my="2">
        <FaChevronLeft style={{ paddingRight: "8px" }} /> Back to all options
      </Button>
    </MotionBox>
  );
};

export default LogInWithEmail;
