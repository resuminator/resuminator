import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";
import useResumeStore from "../../../store/resume.store";

const SectionBox: React.FC<BoxProps> = ({ children, ...props }) => {
  const spacing = useResumeStore((state) => state.spacing);

  return (
    <Box w="inherit" {...props} mb={spacing * 2}>
      {children}
    </Box>
  );
};

export default SectionBox;
