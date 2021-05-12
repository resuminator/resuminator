import { Input, InputProps } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import React, { Fragment } from "react";

interface Props {
  label: string;
}

const InputWithLabel: React.FC<Props & InputProps> = ({ label, ...props }) => (
  <Fragment>
    <Text fontSize="md" pb="2" color="gray.500">
      {label}
    </Text>
    <Input variant="filled" shadow="sm" colorScheme="gray" mb="2" {...props} />
  </Fragment>
);

export default InputWithLabel;
