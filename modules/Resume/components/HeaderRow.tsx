import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface HeaderRowProps {
  index: number;
}

const HeaderRow: React.FC<BoxProps & HeaderRowProps> = ({
  children,
  index,
  ...props
}) => {
  return (
    <Box
      display="flex"
      aria-label={`Row-${index + 1}`}
      key={index}
      width="100%"
      justifyContent="space-between"
      {...props}
    >
      {children}
    </Box>
  );
};

export default HeaderRow;
