import {
  Button,
  Center,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import MotionBox from "../components/layouts/MotionBox";

const Hero = () => {
  return (
    <Center
      flexDir="column"
      minH="sm"
      px={{ base: "0.5rem" }}
      py={{ base: "8" }}
    >
      <Text
        as="h1"
        fontWeight="800"
        fontSize={{ base: "5xl", md: "5xl", xl: "6xl" }}
        textAlign="center"
        letterSpacing={useBreakpointValue({ base: -3 })}
        color={useColorModeValue("#000051", "blue.200")}
        mb="4"
        lineHeight={{ base: "short", md: "shorter" }}
      >
        Beautiful
        <Text
          as="span"
          bgGradient="linear(315deg, #24C6DC 0%, #514A9D 74%)"
          bgClip="text"
          px="1"
        >
          single-page resumes
        </Text>
        within minutes.
      </Text>
      <Text
        maxW={{ base: "80%", md: "60%", xl: "40%" }}
        textAlign="center"
        fontSize={{ base: "lg", md: "lg", xl: "xl" }}
        fontWeight="medium"
        letterSpacing="tight"
        lineHeight="tall"
        mb="8"
        color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
      >
        Resuminator gives you fastest and the simplest resume building
        experience. Save hours of frustation, seize the day.
      </Text>
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
      <Text my="2" fontSize="xs" color="blue.600">
        Yes, this button bounces on clicking!
      </Text>
    </Center>
  );
};

export default Hero;
