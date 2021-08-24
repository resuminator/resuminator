import { Button, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import MotionBox, { MotionBoxProps } from "../../components/layouts/MotionBox";

const PrimaryCTA: React.FC<MotionBoxProps> = ({ ...rest }) => {
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
      >
        Get Started Today
      </Button>
    </MotionBox>
  );
};

export default PrimaryCTA;
