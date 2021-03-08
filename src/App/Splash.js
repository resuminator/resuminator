import { Box } from "@material-ui/core";
import React from "react";
import Loader from "../components/common/Loader";
import LOGO from "../images/Resuminator_logo.png";

const Splash = () => {
  return (
    <Box
      display="grid"
      alignItems="center"
      justifyItems="center"
      height="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <img src={LOGO} height="80rem" width="auto" alt="Loading..." />
        <Loader />
      </Box>
    </Box>
  );
};

export default Splash;
