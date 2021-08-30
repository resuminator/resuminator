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
