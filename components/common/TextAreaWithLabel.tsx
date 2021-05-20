import { Box, Text } from "@chakra-ui/layout";
import { Textarea, TextareaProps } from "@chakra-ui/textarea";
import React from "react";

interface Props {
  label: string;
}

const TextAreaWithLabel: React.FC<Props & TextareaProps> = ({
  label,
  ...props
}) => (
  <Box>
    <Text fontSize="md" pb="2" color="gray.500">
      {label}
    </Text>
    <Textarea
      variant="filled"
      shadow="sm"
      colorScheme="gray"
      mb="2"
      {...props}
    />
  </Box>
);

export default TextAreaWithLabel;
