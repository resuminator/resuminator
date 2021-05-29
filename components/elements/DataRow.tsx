import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";

const DataRow: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
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
