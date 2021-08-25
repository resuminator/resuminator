import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

const SectionLayout: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      px={{ base: "4", md: "8", lg: "16", xl: "24" }}
      pb="0"
      pt={{ base: "8", sm: "16", md: "20" }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default SectionLayout;
