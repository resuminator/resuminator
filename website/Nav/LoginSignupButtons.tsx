import { Button, ButtonGroup, ButtonGroupProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const LoginSignupButtons: React.FC<ButtonGroupProps> = ({ ...props }) => {
  const router = useRouter();

  const routeToLogin = () => {
    router.push("/login");
  };

  const routeToSignup = () => {
    router.push("/signup");
  };

  return (
    <ButtonGroup {...props}>
      <Button
        colorScheme="blue"
        size="md"
        variant="outline"
        onClick={routeToLogin}
      >
        Log in
      </Button>
      <Button
        colorScheme="blue"
        size="md"
        variant="solid"
        rightIcon={<FiArrowRight />}
        onClick={routeToSignup}
      >
        Sign up
      </Button>
    </ButtonGroup>
  );
};
export default LoginSignupButtons;
