import { UserObject } from "../modules/User/types";
import { Result } from "../store/types";

export const userPlaceholder: UserObject = {
  _id: "",
  isBanned: 0,
  fullName: "",
  email: "",
  avatar: "",
  active: [],
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
