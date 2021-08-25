import { Button, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import MotionBox, { MotionBoxProps } from "../../components/layouts/MotionBox";
import mp from "../../services/mixpanel";

const PrimaryCTA: React.FC<MotionBoxProps> = ({ ...rest }) => {
  const router = useRouter();

  const routeToSignup = () => {
    router.push("/signup");
    mp.track("Signup Page CTA Trigger")
  }

  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
      {...rest}
    >
      <Button
        variant="solid"
        size={useBreakpointValue({ base: "md", md: "lg" })}
        colorScheme="blue"
        rightIcon={<FiArrowRight />}
        onClick={routeToSignup}
      >
        Get Started Today
      </Button>
    </MotionBox>
  );
};

export default PrimaryCTA;
