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
import useEducationStore from "../../UserInput/Education/store";
import { EducationDataObject } from "../../UserInput/Education/types";
import SectionBox, { SectionBoxProps } from "../components/SectionBox";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import SubtitleRow from "../components/SubtitleRow";
import TitleRow from "../components/TitleRow";
const BodyText = dynamic(() => import("../components/BodyText"));

const EducationLayout: React.FC<SectionBoxProps> = (props) => {
  const data = useEducationStore((state) => state.data).filter(
    (item) => !item.isHidden
  );
  const showBodyText = (item: EducationDataObject) =>
    sanitizeHTML(item.description.toString()).length > 0;

  /**
   * Create a string from obtained and max grade depending on if the max grade is 100 or not
   * @param obtained Obtained grade as a number
   * @param max Maximum grade as a number
   * @returns String to render according to max grade
   */
  const parseGrade = (obtained: number, max: number) => {
    if (obtained < 1 || isNaN(obtained)) return "";
    if (max === 100) return `, ${obtained}%`;
    else return `, ${obtained}/${max}`;
  };

  return (
    <SectionBox
      aria-label="Education Layout"
      draggableId={props.draggableId}
      index={props.index}
    >
      <SectionTitle>Education</SectionTitle>
      {data.map((item) => (
        <SectionContent key={item._id}>
          <DataRow>
            <TitleRow>{item.institute}</TitleRow>
            <TitleRow textAlign="right">
              {dateDisplay(item.start, item.end)}
            </TitleRow>
          </DataRow>
          <DataRow mb="1">
            <SubtitleRow>
              {item.degree} {item.stream}
              {parseGrade(item.gradeObtained, item.gradeMax)}
            </SubtitleRow>
            <SubtitleRow textAlign="right">{item.location}</SubtitleRow>
          </DataRow>
          <DataRow>
            {showBodyText(item) && <BodyText content={item.description} />}
          </DataRow>
        </SectionContent>
      ))}
    </SectionBox>
  );
};

export default EducationLayout;
