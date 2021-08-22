import { Button, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import MotionBox from "../../components/layouts/MotionBox";

interface Props {}

const PrimaryCTA = (props: Props) => {
  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
    >
      <Button
        variant="solid"
        size={useBreakpointValue({ base: "md", md: "lg" })}
        colorScheme="blue"
        rightIcon={<FiArrowRight />}
      >
        Get Started Today
      </Button>
    </MotionBox>
  );
};

export default PrimaryCTA;
