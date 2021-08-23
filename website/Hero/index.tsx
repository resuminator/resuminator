import { Center, Text } from "@chakra-ui/react";
import React from "react";
import MainHeading from "./MainHeading";
import PrimaryCTA from "./PrimaryCTA";
import Subtext from "./Subtext";

const Hero = () => {
  return (
    <Center
      flexDir="column"
      minH="sm"
      py={{ base: "8" }}
    >
      <MainHeading />
      <Subtext />
      <PrimaryCTA />
      <Text my="2" fontSize="xs" color="blue.600">
        Yes, this button bounces on clicking!
      </Text>
    </Center>
  );
};

export default Hero;
