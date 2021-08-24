import { useColorModeValue } from "@chakra-ui/color-mode";
import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const OverflowWarning = () => {
  const warningColor = useColorModeValue("orange.500", "yellow.200");
  return (
    <HStack>
      <Icon as={FiAlertTriangle} color={warningColor} />
      <Text fontSize="sm" color={warningColor} opacity="0.8">
        Warning: Some content on your resume might be hidden
      </Text>
    </HStack>
  ) 
};

export default OverflowWarning;
