import { Center, Text } from "@chakra-ui/react";
import React from "react";
import SectionLayout from "../common/SectionLayout";
import MainHeading from "./MainHeading";
import PrimaryCTA from "./PrimaryCTA";
import Subtext from "./Subtext";

const Hero = () => {
  return (
    <SectionLayout as={Center} flexDir="column" aria-label="Hero">
      <MainHeading />
      <Subtext />
      <PrimaryCTA mb="2"/>
      <Text mb="4" fontSize="xs" color="blue.600">
        Yes, this button bounces on clicking!
      </Text>
    </SectionLayout>
  );
};

export default Hero;
