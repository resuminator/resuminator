import { Box } from "@chakra-ui/layout";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <Box
      px={{ md: "4rem", lg: "7rem" }}
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      height="100vh"
    >
      {children}
    </Box>
  );
};

export default Layout;
