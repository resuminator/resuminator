import { CertificationDataObject } from "../modules/UserInput/Certification/types";
import { EducationDataObject } from "../modules/UserInput/Education/types";
import { ExperienceDataObject } from "../modules/UserInput/Experience/types";
import { ProjectDataObject } from "../modules/UserInput/Projects/types";
import { PublicationDataObject } from "../modules/UserInput/Publications/types";
import { SkillDataObject } from "../modules/UserInput/Skills/types";
import { getUniqueID } from "../utils";

type HeaderElements = "USER_IMAGE" | "SOCIAL_HANDLES" | "NAME_AND_JT";
type FooterElements = "WATERMARK" | "DATE" | "DATE_W" | "CUSTOM";

type Sections =
  | "EDUCATION"
  | "EXPERIENCE"
  | "PROJECTS"
  | "CERTIFICATIONS"
  | "PUBLICATIONS"
  | "SKILLS";

type FontProfile = "CLASSIC" | "POISE" | "SENIOR" | "MAGAZINE" | "SPACE";
type SpacingProfile = "COMPACT" | "NORMAL" | "AIRY";
type ColorProfiles = "blue" | "purple" | "yellow" | "red" | "pink";

interface ResumeLayoutObject {
  header: Array<Array<HeaderElements>>;
  body: Array<Array<Sections | CustomSectionObject["header"]>>;
  footer: Array<FooterElements>;
}

interface CustomInputFieldsObject {
  id: string;
  type: "TEXT" | "DATE" | "DESC";
  name: string;
}

interface CustomSectionObject {
  header: string;
  hasTitleRow?: boolean;
  inputFields: Array<CustomInputFieldsObject>;
  layout: Array<Array<CustomInputFieldsObject["id"]>>;
}

interface CustomSectionDataObject {
  header: CustomSectionObject["header"];
  data: Array<{ id: CustomInputFieldsObject["id"]; value: Date | string }>;
}

interface ResumeStyleObject {
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

interface Result {
  _id: string;
  resumes: Array<ResumeStyleObject>;
  education: Array<EducationDataObject>;
  experience: Array<ExperienceDataObject>;
  projects: Array<ProjectDataObject>;
  certifications: Array<CertificationDataObject>;
  publications: Array<PublicationDataObject>;
  skills: { hasCategories: boolean; data: Array<SkillDataObject> };
  customSections: Array<CustomSectionDataObject>;
}

export const res: Result = {
  _id: "Firebase_UID_Also_Mongo_UID",
  resumes: [
    {
      id: "SomeResumeUUID", //Default (at Index 0)
      profile_name: "Default Template",
      isPublic: true,
      isClonable: true,
      inputs: [
        "EDUCATION",
        "EXPERIENCE",
        "PROJECTS",
        "CERTIFICATIONS",
        "PUBLICATIONS",
        "SKILLS",
      ],
      layout: {
        header: [["USER_IMAGE", "NAME_AND_JT"], ["SOCIAL_HANDLES"]], //BFS
        body: [
          ["EXPERIENCE", "PROJECTS", "EDUCATION"],
          ["SKILLS", "PUBLICATIONS"],
        ],
        footer: ["WATERMARK"],
      },
      font_profile: "CLASSIC",
      spacing: "NORMAL",
      color: "BLUE", //Any valid HEX color (Defaults to Black)
      customSections: [
        {
          header: "ACHIEVEMENTS", //also Unique.
          hasTitleRow: true,
          inputFields: [
            {
              id: "abc12345", //zero-index becomes TitleRow -> Colored.
              type: "TEXT",
              name: "Organization",
            },
            {
              id: "abc123de", //Subtitle Row -> Gray
              type: "DATE",
              name: "Year",
            },
            {
              id: "abc123fg",
              type: "DESC",
              name: "Description",
            },
          ],
          layout: [["abc12345"], ["abc123de"], ["abc123fg"]],
        },
      ],
    },
  ],
  education: [
    {
      _id: getUniqueID(),
      isHidden: false,
      institute: "Birla Institute of Technology",
      location: "Ranchi, India",
      degree: "",
      stream: "",
      gradeObtained: 1,
      gradeMax: 10,
      start: new Date(),
      end: new Date(),
      description: "",
    },
  ],
  experience: [
    {
      _id: getUniqueID(),
      jobTitle: "Student Developer @ CERN-HSF",
      company: "Google Summer of Code 2020",
      location: "Remote",
      description:
        "<ul><li><p>Developed a new thing.</p></li><li><p>Wrote docs.</p></li></ul>",
      link: "https://github.com/rucio/desktop",
      tags: ["React", " Redux", " ElectronJS", " ExpressJS"],
      start: new Date(),
      end: new Date(),
      isHidden: false,
    },
  ],
  projects: [
    {
      _id: getUniqueID(),
      isHidden: false,
      projectName: "",
      additionalInfo: "",
      start: new Date(),
      end: new Date(),
      description: "",
      link: "",
      tags: [],
    },
  ],
  certifications: [
    {
      _id: getUniqueID(),
      isHidden: false,
      certificateName: "",
      authority: "",
      credentialNumber: "",
      start: new Date(),
      end: new Date(),
      link: "",
    },
  ],
  publications: [],
  skills: {
    hasCategories: true,
    data: [
      {
        _id: getUniqueID(),
        isHidden: false,
        category: "",
        skillsList: [],
      },
    ],
  },
  customSections: [
    {
      header: "ACHIEVEMENTS", //Also Unique
      data: [
        {
          id: "abc12345",
          value: "",
        },
        {
          id: "abc123de",
          value: new Date(),
        },
        {
          id: "abc123fg",
          value: "<ul><li><p>Developed a new thing.</p></li></ul>",
        },
      ],
    },
  ],
};
