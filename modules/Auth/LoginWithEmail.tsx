import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { Box } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import InputField from "../../components/common/InputField";
import LinkText from "../../components/common/LinkText";
import MotionBox from "../../components/layouts/MotionBox";
import firebaseSDK from "../../services/firebase";
import { authPersist } from "../../services/firebase/persistence";

interface Props {
  resetClient: () => void;
}

enum RequestStatus {
  loading,
  idle,
  error,
  success,
}

const LogInWithEmail: React.FC<Props> = ({ resetClient }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);
  const persist = remember ? authPersist.local : authPersist.session;
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.idle);
  const toast = useToast();

  const createToast = (
    title: string,
    status: "error" | "info" | "warning" | "success"
  ) =>
    toast({
      title,
      status,
      variant: "subtle",
      duration: 5000,
      isClosable: true,
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRemember(e.target.checked);
  };

  const handleSubmit = () => {
    if (!(credentials.email && credentials.password))
      return createToast("Please enter valid email and password", "warning");
    setStatus(RequestStatus.loading);

    firebaseSDK
      .auth()
      .setPersistence(persist)
      .then(() =>
        firebaseSDK
          .auth()
          .signInWithEmailAndPassword(credentials.email, credentials.password)
          .then(() => {
            setStatus(RequestStatus.success);
            createToast("Logged in successfully", "success");
          })
          .catch((e) => {
            setStatus(RequestStatus.error);
            createToast(e.message, "error");
          })
      )
      .catch((e) => createToast(e.message, "error"));
  };

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
        isLoading={status === RequestStatus.loading}
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
