import axios from "axios";
import { baseUrl } from "../config/apis";
import { CustomSectionObject } from "../modules/UserInput/Custom/types";
import { EducationDataObject } from "../modules/UserInput/Education/types";
import { ExperienceDataObject } from "../modules/UserInput/Experience/types";
import { ProjectDataObject } from "../modules/UserInput/Projects/types";
import getHeaders from "../utils/headers";

//Higher order function to perform PATCH requests on different sections.
const patchSection =
  <T extends unknown>(endpoint: string) =>
  async (token: string = null, resumeId: string, body: Array<T>) => {
    const res = await axios.patch(`${baseUrl}/${endpoint}/${resumeId}`, body, {
      headers: getHeaders(token),
    });

    return res.data;
  };

export const patchEducation =
  patchSection<EducationDataObject>("resume/education");

export const patchExperience =
  patchSection<ExperienceDataObject>("resume/experience");

export const patchProjects = patchSection<ProjectDataObject>("resume/project");

export const patchPublication =
  patchSection<ProjectDataObject>("resume/publication");

export const patchCertifications = patchSection<ProjectDataObject>(
  "resume/certification"
);

export const patchCustomSections = patchSection<CustomSectionObject>(
  "resume/customsection"
);
