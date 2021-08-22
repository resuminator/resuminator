import {
    Heading,
    useBreakpointValue,
    useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import HeadingGradient from "./HeadingGradient";

const MainHeading = () => {
  return (
    <Heading
      fontWeight="800"
      fontSize={{ base: "5xl", md: "5xl", xl: "6xl" }}
      textAlign="center"
      letterSpacing={useBreakpointValue({ base: -3 })}
      color={useColorModeValue("#000051", "blue.200")}
      mb="4"
      lineHeight={{ base: "short", md: "shorter" }}
    >
      Beautiful
      <HeadingGradient>single-page resumes</HeadingGradient>
      within minutes.
    </Heading>
  );
};

export default MainHeading;
