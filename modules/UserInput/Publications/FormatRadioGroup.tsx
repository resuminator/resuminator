import { Box, Stack, Text } from "@chakra-ui/layout";
import { Radio, RadioGroup, RadioGroupProps } from "@chakra-ui/radio";
import React from "react";

interface Props extends Omit<RadioGroupProps, "children"> {}

const FormatRadioGroup: React.FC<Props> = ({...props}) => {
  return (
    <Box mt="2" mb="8">
      <Text fontSize="md" pb="2" color="gray.500">
        Display Style
      </Text>
      <RadioGroup {...props} defaultValue="MLA">
        <Stack spacing={4} direction="row">
          <Radio value="MLA">MLA</Radio>
          <Radio value="AMA">AMA</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default FormatRadioGroup;
