import { Text } from "@chakra-ui/react";
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
      <Text mb="2" fontWeight="semibold" fontSize="lg">
        {section.header}
      </Text>
      <SectionContent>
        {layout.map((row, index) => (
          <DataRow key={index}>
            {row.map((sectionId) => (
              <Text key={sectionId}>{getInputFieldFromId(sectionId).name}</Text>
            ))}
          </DataRow>
        ))}
      </SectionContent>
    </Fragment>
  );
};

export default ModalStep2;
