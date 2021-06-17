import { Text } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import DataRow from "../../../components/elements/DataRow";
import res from "../../../data/placeholderData";
import { parseDate } from "../../../utils";
import BodyText from "../components/BodyText";
import SectionBox from "../components/SectionBox";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import TitleRow from "../components/TitleRow";

interface CustomSectionLayoutProps {
  sectionKey: string;
}

const CustomSectionLayout: React.FC<CustomSectionLayoutProps> = ({
  sectionKey,
}) => {
  const section = res.customSections.filter(
    (item) => item.header.toUpperCase() === sectionKey
  )[0];

  if(!section) return null;
  /*If the sectionKey mismatches then don't show section on resume
  FIXME: Can be updated to a better logic like - 
  if the section is not present on the inputs 
  or layout object of the resume then don't show.*/
  const { header, data, hasTitleRow, layout } = section;

  const getSection = (sectionId: string) => {
    const { type, value } = data.filter((item) => item.id === sectionId)[0];

    switch (type) {
      case "TEXT":
        return <Text>{value}</Text>;
      case "DATE":
        return <Text>{parseDate(new Date(value), "Y")}</Text>;
      case "DESC":
        return <BodyText content={value.toString()} />;
    }
  };

  return (
    <SectionBox aria-label={`${header} Layout`}>
      <SectionTitle>{header}</SectionTitle>

      <SectionContent>
        {layout.map((row, index) => (
          <DataRow key={index}>
            {row.map((sectionId) =>
              hasTitleRow && index === 0 ? (
                <TitleRow key={sectionId}>{getSection(sectionId)}</TitleRow>
              ) : (
                <Fragment key={sectionId}>{getSection(sectionId)}</Fragment>
              )
            )}
          </DataRow>
        ))}
      </SectionContent>
    </SectionBox>
  );
};

export default CustomSectionLayout;
