/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2022  Resuminator Authors

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

import { Box, HStack, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { useState } from "react";
import Subsection from "../../../components/layouts/Subsection";

interface Props {}

enum ResumeVisibility {
  PUBLIC = "public",
  INCOGNITO = "incognito"
}

const LinkVisibility = (props: Props) => {
  const [visibility, setVisibility] = useState<ResumeVisibility>(
    ResumeVisibility.PUBLIC
  );

  return (
    <Box>
      <Subsection
        title=" Link Visibility"
        subtitle="Changing the visibility to Incognito will make your resume available
          to public but will not show up in search results on Google."
      />
      <RadioGroup
        onChange={(v: ResumeVisibility) => setVisibility(v)}
        value={visibility}
        colorScheme="purple"
      >
        <HStack>
          <Radio value={ResumeVisibility.PUBLIC}>
            <Text fontSize={"sm"}>Public</Text>
          </Radio>
          <Radio value={ResumeVisibility.INCOGNITO}>
            <Text fontSize={"sm"}>Incognito</Text>
          </Radio>
        </HStack>
      </RadioGroup>
    </Box>
  );
};

export default LinkVisibility;
