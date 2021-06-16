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
      customSections: [
        {
          header: "Achievements", //also Unique.
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
          layout: [["abc12345", "abc123de"], [], ["abc123fg"]],
        },
        {
          header: "About", //also Unique.
          hasTitleRow: false,
          inputFields: [
            {
              id: "XYZ123", //zero-index becomes TitleRow -> Colored.
              type: "DESC",
              name: "Description",
            },
          ],
          layout: [["XYZ123"]],
        },
      ],
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
      data: [
        {
          id: "abc12345",
          value: "Organization",
        },
        {
          id: "abc123de",
          value: new Date(),
        },
        {
          id: "abc123fg",
          value:
            "<ul><li><p> Delivered multiple webinars with Google Developer Groups, helping hundreds of young developers start their journey.</p></li><li><p>Actively mentoring students for the past 2 years in design and software development.</p></li></ul>",
        },
      ],
    },
    {
      header: "About", //Also Unique
      data: [
        {
          id: "XYZ123",
          value:
            "<p>This is just the about section you know. Also I'll just write this crazy long text to test this thing out okay! Cupcake ipsum dolor sit. Amet wafer pie cotton candy sugar plum. Jelly marshmallow I love wafer oat cake chocolate cake. Lemon drops sweet liquorice cotton candy chocolate bar.</p>",
        },
      ],
    },
  ],
};

export default placeholderData;
