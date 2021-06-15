import { Box, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import DataRow from "../../../components/elements/DataRow";
import { CustomSectionObject } from "../../../store/types";
import SectionContent from "../../Resume/components/SectionContent";

interface Props {
  section: CustomSectionObject;
}

const ModalStep2: React.FC<Props> = ({ section }) => {
  const { layout, inputFields, hasTitleRow } = section;

  const getInputFieldFromId = (id: string) =>
    inputFields.filter((item) => item.id === id)[0];

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
              {row.map((sectionId) => (
                <Text key={sectionId}>
                  {getInputFieldFromId(sectionId).name}
                </Text>
              ))}
            </DataRow>
          ))}
        </SectionContent>
      </Box>
    </Fragment>
  );
};

export default ModalStep2;
