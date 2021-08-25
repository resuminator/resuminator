import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

const SectionLayout: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box px={{ base: "4", md: "8", lg: "16" }} {...rest}>
      {children}
    </Box>
  );
};

export default SectionLayout;
