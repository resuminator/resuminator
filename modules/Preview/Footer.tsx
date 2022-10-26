import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface Props {}

const PreviewFooter = (props: Props) => {
  const fontColor = useColorModeValue("gray.600", "gray.400");
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      w="100%"
    >
      <HStack fontSize={"sm"} color={fontColor} justify="center" spacing={"4"}>
        <Text>Create a resume</Text>
        <Text>Report</Text>
        <Text>About</Text>
        <Text>GitHub</Text>
        <Text>Twitter</Text>
      </HStack>
    </Box>
  );
};

export default PreviewFooter;
