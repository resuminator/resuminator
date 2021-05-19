import { Box, Text } from "@chakra-ui/layout";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import React from "react";

interface Props {
  inputLabel: string;
}

const NumberInputWithLabel: React.FC<Props & NumberInputProps> = ({
  inputLabel,
  ...props
}) => (
  <Box>
    <Text fontSize="md" pb="2" color="gray.500">
      {inputLabel}
    </Text>
    <NumberInput
      variant="filled"
      shadow="sm"
      colorScheme="gray"
      mb="2"
      {...props}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </Box>
);

export default NumberInputWithLabel;
