import { Text } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import DataRow from "../../../components/elements/DataRow";
import { parseDate } from "../../../utils";
import { useCustomSectionStore } from "../../UserInput/Custom/store";
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
  const section = useCustomSectionStore(
    (state) =>
      state.sections.filter(
        (item) => item.header.toUpperCase() === sectionKey
      )[0]
  );

  if (!section) return null;
  /*If the sectionKey mismatches then don't show section on resume
  FIXME: Can be updated to a better logic like - 
  if the section is not present on the inputs 
  or layout object of the resume then don't show.*/
  const { header, data, inputs, hasTitleRow, layout } = section;

  const getSection = (itemId: string, inputId: string) => {
    const { type } = inputs.filter((input) => input._id === inputId)[0];
    const { values } = data.filter((item) => item._id === itemId)[0];

    switch (type) {
      case "TEXT":
        return <Text>{values[inputId]}</Text>;
      case "DATE":
        return <Text>{parseDate(new Date(values[inputId]), "Y")}</Text>;
      case "DESC":
        return <BodyText content={values[inputId].toString()} />;
    }
  };

  return (
    <SectionBox aria-label={`${header} Layout`}>
      <SectionTitle>{header}</SectionTitle>

      {data.map((item) => (
        <SectionContent key={item._id}>
          {layout.map((row, index) => (
            <DataRow key={index}>
              {row.map((inputId) =>
                hasTitleRow && index === 0 ? (
                  <TitleRow key={inputId}>
                    {getSection(item._id, inputId)}
                  </TitleRow>
                ) : (
                  <Fragment key={inputId}>
                    {getSection(item._id, inputId)}
                  </Fragment>
                )
              )}
            </DataRow>
          ))}
        </SectionContent>
      ))}
    </SectionBox>
  );
};

export default CustomSectionLayout;
