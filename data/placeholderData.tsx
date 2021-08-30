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

import { ResumeMetadata, UserObject } from "../modules/User/types";
import { Result } from "../store/types";

export const userPlaceholder: UserObject = {
  _id: "",
  isBanned: 0,
  active: [],
}

export const resumeMetaPlaceholder: ResumeMetadata =   {
  _id: "",
  profileName: "",
  webId: "",
  icon: "",
  isPublic: true,
  isTemplate: true,
  color: "",
}

const placeholderData: Result = {
  _id: "DefaultID", //Default (at Index 0)
  template:
    {
      inputs: [
        "EDUCATION",
        "EXPERIENCE",
        "PROJECTS",
        "CERTIFICATIONS",
        "PUBLICATIONS",
        "SKILLS",
      ],
      layout: {
        header: [["NAME_AND_JT", "USER_IMAGE"], ["SOCIAL_HANDLES"]], //BFS
        body: [
          ["EXPERIENCE", "PROJECTS", "EDUCATION"],
          ["SKILLS", "PUBLICATIONS"],
        ],
        footer: ["WATERMARK"],
      },
      fontProfile: "CLASSIC",
      spacing: 1,
      color: "blue", //Any valid HEX color (Defaults to Black)
    },
  contact: {
    fullName: "",
    jobTitle: "",
    userImage: "",
    contact: [],
  },
  education: [],
  experience: [],
  projects: [],
  certifications: [],
  publications: [],
  skills: {
    format: 'CATEGORIES',
    data: [],
  },
  customSections: [],
};

export default placeholderData;
