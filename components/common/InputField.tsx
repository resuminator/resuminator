import { Input, InputGroup, InputProps } from "@chakra-ui/input";
import { Box, Text, TextProps } from "@chakra-ui/layout";
import React, { useState } from "react";
import InputRightIcon from "./InputRightIcon";

export interface ErrorProps {
  show?: boolean;
  message: string;
}
interface Props {
  label?: string;
  labelProps?: TextProps;
  error?: ErrorProps;
  isValid?: boolean;
}

const InputField: React.FC<Props & InputProps> = ({
  label,
  labelProps,
  error = { show: false, message: "" },
  isValid,
  type,
  ...rest
}) => {
  const [show, setShow] = useState(false);

  const handleType = (value) => {
    if (value !== "password") return value;

    if (show) return "text";
    return "password";
  };

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
          type={handleType(type)}
        />
        <InputRightIcon
          forPassword={type === "password"}
          options={{ show, isValid }}
          onClick={() => setShow(!show)}
        />
      </InputGroup>
      {error.show ? (
        <Text color="red.500" fontSize="sm">
          {error.message}
        </Text>
      ) : null}
    </Box>
  );
};

export default InputField;
