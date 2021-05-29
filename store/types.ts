import { CertificationDataObject } from "../modules/UserInput/Certification/types";
import { EducationDataObject } from "../modules/UserInput/Education/types";
import { ExperienceDataObject } from "../modules/UserInput/Experience/types";
import { ProjectDataObject } from "../modules/UserInput/Projects/types";
import { PublicationDataObject } from "../modules/UserInput/Publications/types";
import { SkillDataObject } from "../modules/UserInput/Skills/types";

export type UpdateAction = (index: number, key: string, value: any) => void;

export interface Store<ObjectType> {
  isDisabled: boolean;
  toggleDisabled: () => void;
  data: Array<ObjectType>;
  setData?: (list: Array<ObjectType>) => void;
  add: (obj: ObjectType) => void;
  update: UpdateAction;
}

export interface ContactStore<T> {
  fullName: string;
  jobTitle: string;
  contact: Array<T>;
  add: (obj: T) => void;
  update: (index: number, key: string, value: any) => void;
  setFullName: (value: string) => void;
  setJobTitle: (value: string) => void;
}

export interface SkillStore<T> {
  format: "CATEGORIES" | "TAGS";
  isDisabled: boolean;
  toggleDisabled: () => void;
  toggleFormat: () => void;
  data: Array<T>;
  setData?: (list: Array<T>) => void;
  add: (obj: T) => void;
  update: UpdateAction;
}

export type HeaderElements = "USER_IMAGE" | "SOCIAL_HANDLES" | "NAME_AND_JT";
export type FooterElements = "WATERMARK" | "DATE" | "DATE_W" | "CUSTOM";

export type Sections =
  | "EDUCATION"
  | "EXPERIENCE"
  | "PROJECTS"
  | "CERTIFICATIONS"
  | "PUBLICATIONS"
  | "SKILLS";

export type FontProfile = "CLASSIC" | "POISE" | "SENIOR" | "MAGAZINE" | "SPACE";
export type SpacingProfile = "COMPACT" | "NORMAL" | "AIRY";
export type ColorProfiles = "blue" | "purple" | "yellow" | "red" | "pink";

export interface ResumeLayoutObject {
  header: Array<Array<HeaderElements>>;
  body: Array<Array<Sections | CustomSectionObject["header"]>>;
  footer: Array<FooterElements>;
}

export interface CustomInputFieldsObject {
  id: string;
  type: "TEXT" | "DATE" | "DESC";
  name: string;
}

export interface CustomSectionObject {
  header: string;
  hasTitleRow?: boolean;
  inputFields: Array<CustomInputFieldsObject>;
  layout: Array<Array<CustomInputFieldsObject["id"]>>;
}

export interface CustomSectionDataObject {
  header: CustomSectionObject["header"];
  data: Array<{ id: CustomInputFieldsObject["id"]; value: Date | string }>;
}

export interface ResumeStyleObject {
  id: string;
  profile_name: string;
  isPublic?: boolean;
  isClonable?: boolean;
  inputs: Array<Sections | CustomSectionObject["header"]>;
  layout: ResumeLayoutObject;
  font_profile?: FontProfile;
  spacing?: SpacingProfile;
  color?: ColorProfiles | string;
  customSections?: Array<CustomSectionObject>;
}

export interface Result {
  _id?: string;
  resumes?: Array<ResumeStyleObject>;
  education?: Array<EducationDataObject>;
  experience?: Array<ExperienceDataObject>;
  projects?: Array<ProjectDataObject>;
  certifications?: Array<CertificationDataObject>;
  publications?: Array<PublicationDataObject>;
  skills?: { hasCategories: boolean; data: Array<SkillDataObject> };
  customSections?: Array<CustomSectionDataObject>;
}

interface GlobalProperties {
  inputs: Array<Sections | CustomSectionObject["header"]>;
  layout: ResumeLayoutObject;
}

export interface GlobalStore {
  init?: boolean;
  status?: { error: boolean; loading: boolean; success: boolean };
  properties: GlobalProperties;
  setProperties: (value: GlobalProperties) => void;
  setInit?: (value: boolean) => void;
  updateInputs?: (arr: GlobalProperties["inputs"]) => void;
  updateLayout?: (key: string, value: any) => void;
  setStatus?: (key: "error" | "loading" | "success", value: boolean) => void;
}

export interface ResumeStore {
  id: string;
  profileName?: string;
  isPublic?: boolean;
  isClonable?: boolean;
  fontProfile?: FontProfile;
  spacing?: SpacingProfile;
  color?: ColorProfiles;
  customSections?: Array<CustomSectionObject>;
}
