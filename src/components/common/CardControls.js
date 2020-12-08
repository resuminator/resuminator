import { Box } from "@material-ui/core";
import React from "react";

const CardControls = ({ children }) => {
  return (
    <Box
      width="26rem"
      display="flex"
      alignItems="center"
      justifyItems="center"
      justifyContent="space-between"
    >
      {children}
    </Box>
  );
};

export default CardControls;
