import { Result } from "../store/types";

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
  customSections: [
    {
      header: "Achievements", //Also Unique
      hasTitleRow: true,
      data: [
        {
          id: "abc12345",
          type: "TEXT",
          name: "Organization",
          value: "Google Developer Groups",
        },
        {
          id: "abc123de",
          type: "DATE",
          name: "Start Date",
          value: new Date(),
        },
        {
          id: "abc123fg",
          type: "DESC",
          name: "Description",
          value:
            "<ul><li><p> Delivered multiple webinars with Google Developer Groups, helping hundreds of young developers start their journey.</p></li><li><p>Actively mentoring students for the past 2 years in design and software development.</p></li></ul>",
        },
      ],
      layout: [["abc12345", "abc123de"], [], ["abc123fg"]],
    },
    {
      header: "About", //Also Unique
      data: [
        {
          id: "XYZ123", //zero-index becomes TitleRow -> Colored.
          type: "DESC",
          name: "Description",
          value:
            "<p>This is just the about section you know. Also I'll just write this crazy long text to test this thing out okay! Cupcake ipsum dolor sit. Amet wafer pie cotton candy sugar plum. Jelly marshmallow I love wafer oat cake chocolate cake. Lemon drops sweet liquorice cotton candy chocolate bar.</p>",
        },
      ],
      layout: [["XYZ123"]],
    },
  ],
};

export default placeholderData;
