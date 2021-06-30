import { CertificationDataObject } from "../modules/UserInput/Certification/types";
import { UserContactDataObject } from "../modules/UserInput/Contact/types";
import { CustomSectionObject } from "../modules/UserInput/Custom/types";
import { EducationDataObject } from "../modules/UserInput/Education/types";
import { ExperienceDataObject } from "../modules/UserInput/Experience/types";
import { ProjectDataObject } from "../modules/UserInput/Projects/types";
import { PublicationDataObject } from "../modules/UserInput/Publications/types";
import { SkillDataObject } from "../modules/UserInput/Skills/types";

export type UpdateAction = (index: number, key: string, value: any) => void;

export interface Store<ObjectType> {
  data: Array<ObjectType>;
  setData?: (list: Array<ObjectType>) => void;
  add: (obj: ObjectType) => void;
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

export interface ResumeStyleObject {
  id: string;
  profileName: string;
  icon?: string;
  isPublic?: boolean;
  isClonable?: boolean;
  inputs: Array<Sections | CustomSectionObject["header"]>;
  layout: ResumeLayoutObject;
  fontProfile?: FontProfile;
  spacing?: number;
  color?: ColorProfiles | string;
}

export interface Result {
  _id?: string;
  contact?: UserContactDataObject;
  education?: Array<EducationDataObject>;
  experience?: Array<ExperienceDataObject>;
  projects?: Array<ProjectDataObject>;
  certifications?: Array<CertificationDataObject>;
  publications?: Array<PublicationDataObject>;
  skills?: { hasCategories: boolean; data: Array<SkillDataObject> };
  customSections?: Array<CustomSectionObject>;
}

export type InputSectionKeys = Sections | CustomSectionObject["header"];

export type ResumeListType = Array<ResumeStyleObject>;

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
  _id: string;
  profileName?: string;
  icon?: string;
  privacy?: { isPublic?: boolean; isClonable?: boolean };
  properties: ResumeProperties;
  fontProfile?: FontProfile;
  spacing?: number;
  color?: ColorProfiles;
  setProperty?: (key: string, value: any) => void;
  updateInputs?: (arr: ResumeProperties["inputs"]) => void;
  updateLayout?: (key: string, value: any) => void;
  togglePrivacy?: (key: "isPublic" | "isClonable") => void;
  setFontProfile?: (value: FontProfile) => void;
  setColorProfile?: (value: ColorProfiles | string) => void;
  setSpacing?: (value: number) => void;
}
