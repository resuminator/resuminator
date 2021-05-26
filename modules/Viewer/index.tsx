import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";
import Education from "./Education";

interface Props {}

const Viewer = (props: Props) => {
  return (
    <Box
      borderRadius="10px"
      bg={useColorModeValue("white", "inherit")}
      shadow={useColorModeValue("lg", "2xl")}
      height="29.7cm"
      px="8"
    >
      <Education />
    </Box>
  );
};

export default Viewer;
