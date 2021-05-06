import { Box } from "@chakra-ui/layout";
import React from "react";

const TwoColumn: React.FC = ({ children }) => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      height="100vh"
    >
      {children}
    </Box>
  );
};

export default TwoColumn;
