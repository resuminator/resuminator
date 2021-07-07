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
  const darkModeProps: BoxProps = {
    bg: method === id ? "blue.800" : "inherit",
    borderColor: method === id ? "blue.200" : "gray.200",
    _hover: {
      bg: method === id ? "blue.800" : "whiteAlpha.200",
    },
  };

  const lightModeProps: BoxProps = {
    bg: method === id ? "blue.50" : "inherit",
    borderColor: method === id ? "blue.500" : "gray.200",
    _hover: {
      bg: method === id ? "blue.50" : "gray.100",
    },
  };

  const props = useColorModeValue(lightModeProps, darkModeProps);

  return (
    <Box
      p="4"
      m="2"
      cursor="pointer"
      flexBasis="50%"
      onClick={() => callback(id)}
      borderRadius="10px"
      border="2px solid"
      {...props}
    >
      {children}
    </Box>
  );
};

export default ToggleCard;
