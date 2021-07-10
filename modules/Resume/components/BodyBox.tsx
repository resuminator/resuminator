import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

const BodyBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      aria-label="Body"
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      width="100%"
      {...props}
    >
      {children}
    </Box>
  );
};

export default BodyBox;
