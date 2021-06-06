import { Box } from "@chakra-ui/layout";
import React from "react";
import DataRow from "../../../components/elements/DataRow";
import { parseDate } from "../../../utils";
import useProjectStore from "../../UserInput/Projects/store";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import SubtitleRow from "../components/SubtitleRow";
import Tags from "../components/Tags";
import TitleRow from "../components/TitleRow";
import BodyText from "./BodyText";

const ProjectLayout = () => {
  const data = useProjectStore((state) => state.data).filter(
    (item) => !item.isHidden
  );

  return (
    <Box aria-label="Project Layout" w="inherit">
      <SectionTitle>Projects</SectionTitle>
      {data.map((item) => (
        <SectionContent key={item._id}>
          <DataRow>
            <TitleRow as="a" href={item.link}>
              {item.projectName}
            </TitleRow>
            <TitleRow textAlign="right">
              {parseDate(item.start, "YM")} - {parseDate(item.end, "YM")}
            </TitleRow>
          </DataRow>
          <DataRow mb="1">
            <SubtitleRow>{item.additionalInfo}</SubtitleRow>
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

export default ProjectLayout;
