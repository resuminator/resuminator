import { Box, Text, TextProps } from "@chakra-ui/layout";
import { ColorProps } from "@chakra-ui/styled-system";
import React from "react";
import DataRow from "../../../components/elements/DataRow";
import SectionName from "../../../components/elements/SectionName";
import TextViewer from "../../../plugins/Tiptap/TextViewer";
import { parseDate } from "../../../utils";
import useEducationStore from "../../UserInput/Education/store";

interface Props {}

const Education = (props: Props) => {
  const data = useEducationStore((state) => state.data).filter(
    (item) => !item.isHidden
  );

  const PRIMARY_COLOR: ColorProps["color"] = "purple.600";

  const titleStyle: TextProps = {
    fontSize: "md",
    color: PRIMARY_COLOR,
    fontWeight: "semibold",
  };

  const subtitleStyle: TextProps = {
    fontSize: "sm",
    color: "gray.500",
    mb: "1",
  };

  const parseGrade = (obtained: number, max: number) => {
    if (max === 100) return `${obtained}%`;
    else return `${obtained}/${max}`;
  };

  return (
    <Box aria-label="Education Layout" w="inherit">
      <SectionName color={PRIMARY_COLOR}>Education</SectionName>
      {data.map((item) => (
        <Box
          display="flex"
          alignContent="flex-start"
          flexDir="column"
          key={item._id}
          mb="2.5"
        >
          <DataRow>
            <Text {...titleStyle}>{item.institute}</Text>
            <Text {...titleStyle} textAlign="right">
              {parseDate(item.start)} - {parseDate(item.end)}
            </Text>
          </DataRow>
          <DataRow mb="1">
            <Text {...subtitleStyle}>
              {item.degree} {item.stream},{" "}
              {parseGrade(item.gradeObtained, item.gradeMax)}
            </Text>
            <Text {...subtitleStyle} textAlign="right">
              {item.location}
            </Text>
          </DataRow>
          <DataRow>
            <TextViewer content={item.description} />
          </DataRow>
        </Box>
      ))}
    </Box>
  );
};

export default Education;
