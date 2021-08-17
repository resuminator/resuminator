import dynamic from "next/dynamic";
import React from "react";
import DataRow from "../../../components/elements/DataRow";
import { parseDate, sanitizeHTML } from "../../../utils";
import useExperienceStore from "../../UserInput/Experience/store";
import { ExperienceDataObject } from "../../UserInput/Experience/types";
import ExternalLink from "../components/ExternalLink";
import SectionBox from "../components/SectionBox";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import SubtitleRow from "../components/SubtitleRow";
import Tags from "../components/Tags";
import TitleRow from "../components/TitleRow";
const BodyText = dynamic(() => import('../components/BodyText'))

const ExperienceLayout = (props) => {
  const data = useExperienceStore((state) => state.data).filter(
    (item) => !item.isHidden
  );
  const showBodyText = (item: ExperienceDataObject) => sanitizeHTML(item.description.toString()).length > 0;

  return (
    <SectionBox aria-label="Experience Layout" {...props}>
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
            <SubtitleRow>{item.jobTitle}</SubtitleRow>
            <SubtitleRow textAlign="right">{item.location}</SubtitleRow>
          </DataRow>
          <DataRow>
            {showBodyText(item) && <BodyText content={item.description} />}
          </DataRow>
          <DataRow>
            <ExternalLink as="a" href={item.link} />
          </DataRow>
          <DataRow justifyContent="flex-start">
            <Tags list={item.tags} />
          </DataRow>
        </SectionContent>
      ))}
    </SectionBox>
  );
};

export default ExperienceLayout;
