import { Box } from "@material-ui/core";
import React from "react";

const InputCardContent = ({ label, children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
      mt={2}
      key={label}
    >
      {children}
    </Box>
  );
};

export default InputCardContent;
