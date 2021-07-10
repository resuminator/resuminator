import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface BodyColumnProps {
  index: number;
  ref?: React.Ref<HTMLDivElement>;
}

const BodyColumn: React.FC<BoxProps & BodyColumnProps> = ({
  children,
  index,
  ref,
  ...rest
}) => (
  <Box
    display="flex"
    flexDir="column"
    aria-label={`Column-${index + 1}`}
    ref={ref}
    {...rest}
  >
    {children}
  </Box>
);

export default BodyColumn;
