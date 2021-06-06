import { Box } from "@chakra-ui/layout";
import React from "react";
import DataRow from "../../../components/elements/DataRow";
import { parseDate } from "../../../utils";
import useExperienceStore from "../../UserInput/Experience/store";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import SubtitleRow from "../components/SubtitleRow";
import Tags from "../components/Tags";
import TitleRow from "../components/TitleRow";
import BodyText from "./BodyText";

const ExperienceLayout = () => {
  const data = useExperienceStore((state) => state.data).filter(
    (item) => !item.isHidden
  );

  return (
    <Box aria-label="Experience Layout" w="inherit">
      <SectionTitle>Experience</SectionTitle>
      {data.map((item) => (
        <SectionContent key={item._id}>
          <DataRow>
            <TitleRow>{item.company}</TitleRow>
            <TitleRow textAlign="right">
              {parseDate(item.start, "YM")} - {parseDate(item.end, "YM")}
            </TitleRow>
          </DataRow>
          <DataRow mb="1">
            <SubtitleRow>
              {item.jobTitle}
            </SubtitleRow>
            <SubtitleRow textAlign="right">{item.location}</SubtitleRow>
          </DataRow>
          <DataRow>
            <BodyText content={item.description} />
          </DataRow>
          <DataRow justifyContent="flex-start">
            <Tags list={item.tags} />
          </DataRow>
        </SectionContent>
      ))}
    </Box>
  );
};

export default ExperienceLayout;
