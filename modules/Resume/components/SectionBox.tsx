import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";

const SectionBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box w="inherit" {...props} m="2">
      {children}
    </Box>
  );
};

export default SectionBox;
