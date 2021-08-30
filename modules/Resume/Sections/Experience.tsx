/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import dynamic from "next/dynamic";
import React from "react";
import DataRow from "../../../components/elements/DataRow";
import { dateDisplay, sanitizeHTML } from "../../../utils";
import useExperienceStore from "../../UserInput/Experience/store";
import { ExperienceDataObject } from "../../UserInput/Experience/types";
import ExternalLink from "../components/ExternalLink";
import SectionBox from "../components/SectionBox";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import SubtitleRow from "../components/SubtitleRow";
import Tags from "../components/Tags";
import TitleRow from "../components/TitleRow";
const BodyText = dynamic(() => import("../components/BodyText"));

const ExperienceLayout = (props) => {
  const data = useExperienceStore((state) => state.data).filter(
    (item) => !item.isHidden
  );
  const showBodyText = (item: ExperienceDataObject) =>
    sanitizeHTML(item.description.toString()).length > 0;

  return (
    <SectionBox aria-label="Experience Layout" {...props}>
      <SectionTitle>Experience</SectionTitle>
      {data.map((item) => (
        <SectionContent key={item._id}>
          <DataRow>
            <TitleRow>{item.company}</TitleRow>
            <TitleRow textAlign="right">
              {dateDisplay(item.start, item.end, "YM")}
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
