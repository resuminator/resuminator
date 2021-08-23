import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const RevuePolicy = () => {
  return (
    <Text fontSize={{ base: "xs", lg: "sm" }} color={useColorModeValue("blackAlpha.700", "whiteAlpha.600")} py="4">
      By subscribing, you agree with Revue’s{" "}
      <Text
        color="blue.500"
        as="a"
        target="_blank"
        href="https://www.getrevue.co/terms"
        rel="noreferrer"
      >
        Terms of Service
      </Text>{" "}
      and{" "}
      <Text
        color="blue.500"
        as="a"
        target="_blank"
        href="https://www.getrevue.co/privacy"
        rel="noreferrer"
      >
        Privacy Policy
      </Text>
    </Text>
  );
};

export default RevuePolicy;
