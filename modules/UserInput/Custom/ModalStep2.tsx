import { Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useEffect } from "react";
import DataRow from "../../../components/elements/DataRow";
import {
  CustomInputFieldsObject,
  CustomSectionObject,
} from "../../../store/types";
import SectionContent from "../../Resume/components/SectionContent";
import SectionTitle from "../../Resume/components/SectionTitle";

interface Props {
  section: CustomSectionObject;
}

const ModalStep2: React.FC<Props> = ({ section }) => {
  const { layout, inputFields, hasTitleRow } = section;

  useEffect(() => console.log(section), [section]);

  const getInputFieldFromId = (id: string) =>
    inputFields.filter((item) => item.id === id)[0];

  const getSection = (sectionObject: CustomInputFieldsObject) => {
    switch (sectionObject.type) {
      case "TEXT":
        return <Text>{sectionObject.name}</Text>;
      case "DATE":
        return <Text>{sectionObject.name}</Text>;
      case "DESC":
        return <Text>{sectionObject.name}</Text>;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <Text fontSize="sm" mb="4">
        Arrange the layout of the selected inputs on your resume. Drag the items
        to rearrange the layout.
      </Text>
      <SectionTitle>{section.header}</SectionTitle>
      <SectionContent>
        {layout.map((row) =>
          row.map((sectionId) => (
            <DataRow key={sectionId}>
              {getSection(getInputFieldFromId(sectionId))}
            </DataRow>
          ))
        )}
      </SectionContent>
    </Fragment>
  );
};

export default ModalStep2;
