import { Result } from "../store/types";

const placeholderData: Result = {
  resumes: [
    {
      id: "DefaultID", //Default (at Index 0)
      profileName: "Default Template",
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
      fontProfile: "CLASSIC",
      spacing: 1,
      color: "blue", //Any valid HEX color (Defaults to Black)
    },
  ],
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
    hasCategories: true,
    data: [],
  },
  customSections: [],
};

export default placeholderData;
