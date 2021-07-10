import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface BodySectionBoxProps {
    label: string;
}

const BodySectionBox: React.FC<BoxProps & BodySectionBoxProps> = ({
  children,
  label,
}) => {
  return (
    <Box display="flex" aria-label={label} width="100%">
      {children}
    </Box>
  );
};

export default BodySectionBox;
