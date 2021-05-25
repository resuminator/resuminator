import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";

interface Props {}

const Viewer = (props: Props) => {
  return (
    <Box
      borderRadius="10px"
      bg="inherit"
      shadow={useColorModeValue("lg", "2xl")}
      height="100vh"
    >
      RESUME HERE
    </Box>
  );
};

export default Viewer;
