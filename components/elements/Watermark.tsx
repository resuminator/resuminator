import { Box, Text } from "@chakra-ui/layout";
import React from "react";

interface Props {}

const Watermark = (props: Props) => {
  return (
    <Box position="absolute" width="100%">
      <Text fontSize="sm">
        Built with{" "}
        <Text as="span" letterSpacing="tight">
          Resuminator
        </Text>
      </Text>
    </Box>
  );
};

export default Watermark;
