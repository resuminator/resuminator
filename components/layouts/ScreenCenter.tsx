import { Box } from "@chakra-ui/layout";
import React from "react";

const ScreenCenter: React.FC = ({ children }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      {children}
    </Box>
  );
};

export default ScreenCenter;
