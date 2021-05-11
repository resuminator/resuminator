import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";
import BoxHeader, { BoxHeaderProps } from "../common/BoxHeader";

interface Props {
  header?: BoxHeaderProps & BoxProps;
}

const Section: React.FC<Props & BoxProps> = ({ children, header, ...props }) => {
  return (
    <Box mb="8">
      <BoxHeader size={{ title: "lg", subtitle: "sm" }} {...header} />
      <Box
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        w="80%"
        {...props}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Section;
