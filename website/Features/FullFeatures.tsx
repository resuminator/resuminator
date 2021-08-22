import { Box, Text } from "@chakra-ui/react";
import React from "react";

const FullFeatures = () => {
  return (
    <Box>
      <Box px="8" py="4" textAlign="center">
        <Text
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          letterSpacing={-2}
          mb="2"
          lineHeight="short"
          color="purple.500"
        >
          For people who care about their time!
        </Text>
        <Text fontWeight="medium" fontSize="2xl" letterSpacing="tight">
          A tool built for productivity
        </Text>
      </Box>
    </Box>
  );
};

export default FullFeatures;
