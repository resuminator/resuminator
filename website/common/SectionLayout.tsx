import { Box } from "@chakra-ui/react";
import React from "react";

const SectionLayout: React.FC = ({ children }) => {
  return <Box px={{ base: "4", md: "8", lg: "16" }}>{children}</Box>;
};

export default SectionLayout;
