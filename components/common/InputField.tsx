import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/input";
import { Box, Text, TextProps } from "@chakra-ui/layout";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

type ErrorProps = {
  message: string;
};

interface Props {
  label?: string;
  labelProps?: TextProps;
  error?: ErrorProps;
  valid?: boolean;
}

const InputField: React.FC<Props & InputProps> = ({
  label,
  labelProps,
  error = { message: "" },
  valid,
  ...rest
}) => {
  return (
    <Box aria-label="Input-With-Label" mb="2">
      <Text {...labelProps} fontSize="md" pb="2" color="gray.500">
        {label}
      </Text>
      <InputGroup>
        <Input
          {...rest}
          variant="outline"
          shadow="sm"
          colorScheme="gray"
          mb="2"
          isInvalid={error.message && true}
          errorBorderColor="red.400"
        />
        {!error && (
          <InputRightElement color="green.400">
            {valid && <FaCheckCircle />}
          </InputRightElement>
        )}
      </InputGroup>
      {error && (
        <Text color="red.500" fontSize="sm">
          {error.message}
        </Text>
      )}
    </Box>
  );
};

export default InputField;
