import dynamic from "next/dynamic";
import React from "react";
import DataRow from "../../../components/elements/DataRow";
import { dateDisplay, sanitizeHTML } from "../../../utils";
import useProjectStore from "../../UserInput/Projects/store";
import { ProjectDataObject } from "../../UserInput/Projects/types";
import SectionBox from "../components/SectionBox";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import SubtitleRow from "../components/SubtitleRow";
import Tags from "../components/Tags";
import TitleRow from "../components/TitleRow";
const BodyText = dynamic(() => import("../components/BodyText"));

const ProjectLayout = (props) => {
  const data = useProjectStore((state) => state.data).filter(
    (item) => !item.isHidden
  );

  /**
   * Filters HTML elements from description and returns boolean if any string content is present
   * @param item Project Data Object
   * @returns True if there is some content in the description
   */
  const showBodyText = (item: ProjectDataObject) =>
    sanitizeHTML(item.description.toString()).length > 0;

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
              {dateDisplay(item.start, item.end, "YM")}
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
