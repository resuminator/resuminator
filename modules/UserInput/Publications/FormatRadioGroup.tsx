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
          <Radio value="APA">APA</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default FormatRadioGroup;
