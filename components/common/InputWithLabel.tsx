import { Input, InputProps } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";

interface Props {
  label: string;
}

const InputWithLabel: React.FC<Props & InputProps> = ({ label, ...props }) => (
  <Box>
    <Text fontSize="md" pb="2" color="gray.500">
      {label}
    </Text>
    <Input variant="filled" shadow="sm" colorScheme="gray" mb="2" {...props} />
  </Box>
);

export default InputWithLabel;
