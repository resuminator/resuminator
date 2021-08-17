import dynamic from "next/dynamic";
import React from "react";
import DataRow from "../../../components/elements/DataRow";
import { parseDate, sanitizeHTML } from "../../../utils";
import useProjectStore from "../../UserInput/Projects/store";
import { ProjectDataObject } from "../../UserInput/Projects/types";
import SectionBox from "../components/SectionBox";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import SubtitleRow from "../components/SubtitleRow";
import Tags from "../components/Tags";
import TitleRow from "../components/TitleRow";
const BodyText = dynamic(() => import('../components/BodyText'))

const ProjectLayout = (props) => {
  const data = useProjectStore((state) => state.data).filter(
    (item) => !item.isHidden
  );
  const showBodyText = (item: ProjectDataObject) => sanitizeHTML(item.description.toString()).length > 0;

  return (
    <SectionBox aria-label="Project Layout" {...props}>
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
            {showBodyText(item) && <BodyText content={item.description} />}
          </DataRow>
          <DataRow justifyContent="flex-start">
            <Tags list={item.tags} />
          </DataRow>
        </SectionContent>
      ))}
    </SectionBox>
  );
};

export default ProjectLayout;
