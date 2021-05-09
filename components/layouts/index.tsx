import { Box, BoxProps } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import Footer from "../Footer";

const Layout: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Fragment>
      <Box
        px={{ md: "4rem", lg: "7rem" }}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        height="100vh"
        {...props}
      >
        {children}
      </Box>
      <Footer />
    </Fragment>
  );
};

export default Layout;
