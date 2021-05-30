import { Result } from "../store/types";
import { getUniqueID } from "../utils";

const placeholderData: Result = {
  _id: "Firebase_UID_Also_DB_UID",
  resumes: [
    {
      id: "DefaultID", //Default (at Index 0)
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
      institute: "",
      location: "",
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
      jobTitle: "",
      company: "",
      location: "",
      description: "",
      link: "",
      tags: [],
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

export default placeholderData;
