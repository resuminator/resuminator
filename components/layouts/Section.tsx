import { Box } from "@chakra-ui/layout";
import React from "react";
import BoxHeader, { BoxHeaderProps } from "../common/BoxHeader";

interface Props {
  header?: BoxHeaderProps;
}

const Section: React.FC<Props> = ({ children, header }) => {
  return (
    <Box mb="8">
      <BoxHeader {...header} />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        w="80%"
      >
        {children}
      </Box>
    </Box>
  );
};

export default Section;
