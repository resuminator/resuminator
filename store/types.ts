import { CertificationDataObject } from "../modules/UserInput/Certification/types";
import { UserContactDataObject } from "../modules/UserInput/Contact/types";
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
  userImage: string;
  contact: Array<T>;
  add: (obj: T) => void;
  update: (index: number, key: string, value: any) => void;
  setContact: (value: Array<T>) => void;
  setUserImage: (value: string) => void;
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

export type FontProfile = "CLASSIC" | "POISE" | "SENIOR" | "MAGAZINE";
export type ColorProfiles =
  | "blue"
  | "purple"
  | "yellow"
  | "red"
  | "pink"
  | string;

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
  data?: Array<{ id: CustomInputFieldsObject["id"]; value: Date | string }>;
}

export interface ResumeStyleObject {
  id: string;
  profile_name: string;
  isPublic?: boolean;
  isClonable?: boolean;
  inputs: Array<Sections | CustomSectionObject["header"]>;
  layout: ResumeLayoutObject;
  font_profile?: FontProfile;
  spacing?: number;
  color?: ColorProfiles | string;
  customSections?: Array<CustomSectionObject>;
}

export interface Result {
  _id?: string;
  resumes?: Array<ResumeStyleObject>;
  contact?: UserContactDataObject;
  education?: Array<EducationDataObject>;
  experience?: Array<ExperienceDataObject>;
  projects?: Array<ProjectDataObject>;
  certifications?: Array<CertificationDataObject>;
  publications?: Array<PublicationDataObject>;
  skills?: { hasCategories: boolean; data: Array<SkillDataObject> };
  customSections?: Array<CustomSectionDataObject>;
}

export type InputSectionKeys = Sections | CustomSectionObject["header"];

interface GlobalProperties {
  inputs: Array<InputSectionKeys>;
  layout: ResumeLayoutObject;
}

interface ResumeProperties {
  inputs: Array<InputSectionKeys>;
  layout: ResumeLayoutObject;
}

export interface GlobalStore {
  init?: boolean;
  isLoading?: boolean;
  grayscaleFilter: boolean;
  setInit?: (value: boolean) => void;
  setLoading?: (value: boolean) => void;
  toggleGrayscaleFilter?: () => void;
}

export interface ResumeStore {
  id: string;
  profileName?: string;
  privacy?: { isPublic?: boolean; isClonable?: boolean };
  properties: ResumeProperties;
  fontProfile?: FontProfile;
  spacing?: number;
  color?: ColorProfiles;
  updateInputs?: (arr: GlobalProperties["inputs"]) => void;
  updateLayout?: (key: string, value: any) => void;
  setProperties: (value: GlobalProperties) => void;
  togglePrivacy?: (key: "isPublic" | "isClonable") => void;
  setProfileName?: (value: string) => void;
  setFontProfile?: (value: FontProfile) => void;
  setSpacing?: (value: number) => void;
  setColorProfile?: (value: ColorProfiles) => void;
  // customSections?: Array<CustomSectionObject>;
}
