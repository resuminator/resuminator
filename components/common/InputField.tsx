/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

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
      <Text fontSize="md" pb="2" color="gray.500" {...labelProps}>
        {label}
      </Text>
      <InputGroup>
        <Input
          variant="outline"
          shadow="sm"
          colorScheme="gray"
          mb="2"
          type={handleType(type)}
          {...rest}
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
