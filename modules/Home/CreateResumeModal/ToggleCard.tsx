import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Method } from ".";

interface Props {
  id: Method;
  method: Method;
  callback: (value: Method) => void;
}

const ToggleCard: React.FC<Props & BoxProps> = ({
  id,
  method,
  callback,
  children,
}) => {
  return (
    <Box
      p="4"
      m="2"
      cursor="pointer"
      flexBasis="50%"
      bg={method === id ? "blue.50" : "inherit"}
      onClick={() => callback(id)}
      borderRadius="10px"
      border="2px solid"
      borderColor={method === id ? "blue.500" : "gray.200"}
      _hover={{ bg: useColorModeValue("gray.100", "whiteAlpha.200") }}
    >
      {children}
    </Box>
  );
};

export default ToggleCard;
