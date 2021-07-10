import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

const HeaderBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      aria-label="Header"
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      justifyContent="space-between"
      width="100%"
      {...props}
    >
      {children}
    </Box>
  );
};

export default HeaderBox;
