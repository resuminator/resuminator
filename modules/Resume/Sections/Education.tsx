import React from "react";
import DataRow from "../../../components/elements/DataRow";
import { parseDate } from "../../../utils";
import useEducationStore from "../../UserInput/Education/store";
import BodyText from "../components/BodyText";
import SectionBox from "../components/SectionBox";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import SubtitleRow from "../components/SubtitleRow";
import TitleRow from "../components/TitleRow";

const EducationLayout = () => {
  const data = useEducationStore((state) => state.data).filter(
    (item) => !item.isHidden
  );

  /**
   * Create a string from obtained and max grade depending on if the max grade is 100 or not
   * @param obtained Obtained grade as a number
   * @param max Maximum grade as a number
   * @returns String to render according to max grade
   */
  const parseGrade = (obtained: number, max: number) => {
    if (max === 100) return `${obtained}%`;
    else return `${obtained}/${max}`;
  };

  return (
    <SectionBox aria-label="Education Layout">
      <SectionTitle>Education</SectionTitle>
      {data.map((item) => (
        <SectionContent key={item._id}>
          <DataRow>
            <TitleRow>{item.institute}</TitleRow>
            <TitleRow textAlign="right">
              {parseDate(item.start)} - {parseDate(item.end)}
            </TitleRow>
          </DataRow>
          <DataRow mb="1">
            <SubtitleRow>
              {item.degree} {item.stream},{" "}
              {parseGrade(item.gradeObtained, item.gradeMax)}
            </SubtitleRow>
            <SubtitleRow textAlign="right">{item.location}</SubtitleRow>
          </DataRow>
          <DataRow>
            <BodyText content={item.description} />
          </DataRow>
        </SectionContent>
      ))}
    </SectionBox>
  );
};

export default EducationLayout;
