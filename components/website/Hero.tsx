import { Button, Center, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import MotionBox from "../layouts/MotionBox";

const Hero = () => {
  return (
    <Center flexDir="column" minH="sm" px={{ base: "0.5rem" }}>
      <Text
        as="h1"
        fontWeight="800"
        fontSize="4xl"
        textAlign="center"
        letterSpacing="tighter"
        color={useColorModeValue("#000051", "blue.200")}
        mb="2"
      >
        Build beautiful
        <Text
          as="span"
          bgGradient="linear(315deg, #24C6DC 0%, #514A9D 74%)"
          bgClip="text"
          px="1"
        >
          single-page resumes
        </Text>
        <br /> within minutes.
      </Text>
      <Text
        textAlign="center"
        fontSize="md"
        letterSpacing="tight"
        mb="8"
        color={useColorModeValue("inherit", "whiteAlpha.800")}
      >
        The fastest and most delightful resume building experience is here! Save
        hours of frustation.
      </Text>
      <MotionBox
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15 }}
      >
        <Button
          variant="solid"
          size="lg"
          colorScheme="blue"
          rightIcon={<FiArrowRight />}
        >
          Get Started Today
        </Button>
      </MotionBox>
    </Center>
  );
};

export default Hero;
