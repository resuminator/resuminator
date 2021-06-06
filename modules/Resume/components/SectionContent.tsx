import { Box } from "@chakra-ui/layout";
import React from "react";

const SectionContent: React.FC = ({ children }) => {
  return (
    <Box display="flex" alignContent="flex-start" flexDir="column" mb="2.5">
      {children}
    </Box>
  );
};

export default SectionContent;
