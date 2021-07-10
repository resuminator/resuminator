import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface BodySectionBoxProps {
    label: string;
    ref?: React.Ref<HTMLDivElement>
}

const BodySectionBox: React.FC<BoxProps & BodySectionBoxProps> = ({
  children,
  label,
  ref
}) => {
  return (
    <Box display="flex" aria-label={label} width="100%" ref={ref}>
      {children}
    </Box>
  );
};

export default BodySectionBox;
