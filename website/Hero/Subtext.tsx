import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Subtext = () => {
  return (
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
      Resuminator gives you fastest and the simplest resume building experience.
      Save hours of frustation, seize the day.
    </Text>
  );
};

export default Subtext;
