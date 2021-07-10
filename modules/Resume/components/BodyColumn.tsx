import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface BodyColumnProps {
  index: number;
}

const BodyColumn: React.FC<BoxProps & BodyColumnProps> = ({
  children,
  index,
  ...props
}) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      aria-label={`Column-${index + 1}`}
      {...props}
    >
      {children}
    </Box>
  );
};

export default BodyColumn;
