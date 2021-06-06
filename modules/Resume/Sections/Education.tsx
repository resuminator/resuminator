import { Box, Text } from "@chakra-ui/layout";
import React, { useContext } from "react";
import DataRow from "../../../components/elements/DataRow";
import TextViewer from "../../../plugins/Tiptap/TextViewer";
import { parseDate } from "../../../utils";
import { StylePropsContext } from "../../Design/StylePropsProvider";
import useEducationStore from "../../UserInput/Education/store";
import SectionTitle from "./SectionTitle";
import TitleRow from "./TitleRow";

const EducationLayout = () => {
  const data = useEducationStore((state) => state.data).filter(
    (item) => !item.isHidden
  );
  const { titleRowProps, subtitleRowProps, bodyProps } =
    useContext(StylePropsContext);

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
    <Box aria-label="Education Layout" w="inherit">
      <SectionTitle>Education</SectionTitle>
      {data.map((item) => (
        <Box
          display="flex"
          alignContent="flex-start"
          flexDir="column"
          key={item._id}
          mb="2.5"
        >
          <DataRow>
            <TitleRow>{item.institute}</TitleRow>
            <TitleRow textAlign="right">
              {parseDate(item.start)} - {parseDate(item.end)}
            </TitleRow>
          </DataRow>
          <DataRow mb="1">
            <Text {...subtitleRowProps}>
              {item.degree} {item.stream},{" "}
              {parseGrade(item.gradeObtained, item.gradeMax)}
            </Text>
            <Text {...subtitleRowProps} textAlign="right">
              {item.location}
            </Text>
          </DataRow>
          <DataRow>
            <TextViewer content={item.description} {...bodyProps} />
          </DataRow>
        </Box>
      ))}
    </Box>
  );
};

export default EducationLayout;
