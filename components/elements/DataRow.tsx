import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";

const DataRow: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      aria-label="Data Row"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default DataRow;
