import { Box } from "@chakra-ui/layout";
import { BoxProps } from "@chakra-ui/react";
import React from "react";

const ScreenCenter: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default ScreenCenter;
