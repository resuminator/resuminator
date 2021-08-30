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

import { Box, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import DataRow from "../../../components/elements/DataRow";
import SectionContent from "../../Resume/components/SectionContent";
import { CustomSectionObject } from "./types";

interface Props {
  section: CustomSectionObject;
}

const ModalStep2: React.FC<Props> = ({ section }) => {
  const { layout, inputs, hasTitleRow } = section;

  const getInputFieldFromId = (id: string) =>
    inputs.find((item) => item._id === id);

  return (
    <Fragment>
      <Text fontSize="sm" mb="4">
        Arrange the layout of the selected inputs on your resume. Drag the items
        to rearrange the layout.
      </Text>
      <Text
        mb="1"
        textTransform="uppercase"
        fontWeight="semibold"
        fontSize="xs"
        color="gray.400"
        letterSpacing="wider"
      >
        Preview
      </Text>
      <Box m="4" p="4" border="2px" borderColor="gray.200" borderRadius="10px">
        <Text mb="2" color="purple.600" fontWeight="semibold" fontSize="lg">
          {section.header}
        </Text>
        <SectionContent>
          {layout.map((row, index) => (
            <DataRow key={index}>
              {row.map((inputId) => (
                <Text key={inputId}>{getInputFieldFromId(inputId).name}</Text>
              ))}
            </DataRow>
          ))}
        </SectionContent>
      </Box>
    </Fragment>
  );
};

export default ModalStep2;
