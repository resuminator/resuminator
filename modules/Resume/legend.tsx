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

import { HeaderElements, InputSectionKeys } from "../../store/types";
import NameAndJobTitleLayout from "./Header/NameAndJT";
import UserImageLayout from "./Header/UserImage";
import SocialHandlesLayout from "./Header/SocialHandles";
import {
  CertificationsLayout,
  EducationLayout,
  ExperienceLayout,
  ProjectLayout,
  PublicationsLayout,
  SkillsLayout,
} from "./Sections";
import CustomSectionLayout from "./Sections/CustomSection";
import { SectionBoxProps } from "./components/SectionBox";

export const getLayout = (key: InputSectionKeys, props: SectionBoxProps) => {
  switch (key) {
    case "EDUCATION":
      return <EducationLayout {...props}/>;
    case "EXPERIENCE":
      return <ExperienceLayout {...props}/>;
    case "PROJECTS":
      return <ProjectLayout {...props}/>;
    case "CERTIFICATIONS":
      return <CertificationsLayout {...props}/>;
    case "PUBLICATIONS":
      return <PublicationsLayout {...props}/>;
    case "SKILLS":
      return <SkillsLayout {...props}/>;
    default: 
      return <CustomSectionLayout sectionKey={key} {...props}/>;
  }
};

export const getHeaderLayout = (key: HeaderElements) => {
  switch (key) {
    case "NAME_AND_JT":
      return <NameAndJobTitleLayout />;
    case "USER_IMAGE":
      return <UserImageLayout />;
    case "SOCIAL_HANDLES":
      return <SocialHandlesLayout />;
    default:
      return null;
  }
};
