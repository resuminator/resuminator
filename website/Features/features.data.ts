import {
  FiAtSign,
  FiColumns,
  FiCopy,
  FiImage,
  FiMoon,
  FiTarget,
  FiType
} from "react-icons/fi";
import { RiPaletteLine } from "react-icons/ri";
import { FeatureCardProps } from "./types";

export const FeatureDetails = [
  {
    title: "Drag-n-Drop Layouts",
    description:
      "Each element inside your resume can be rearranged using simple drag and drop. Updating layouts would become a breeze when you are editing your resume!",
    graphic: [
      "https://res.cloudinary.com/resuminator/video/upload/v1630318815/videos/dnd_light_qs17l1.mp4",
      "https://res.cloudinary.com/resuminator/video/upload/v1630321552/videos/dnd_dark_vsjzri.mp4",
    ],
    color: ["purple.600", "purple.400"],
  },
  {
    title: "Easy Toggles",
    description:
      "Keep the data, but hide the content OR simply convert your single column resume into a two-column one with a click. Easy toggle support allows you to put your best foot forward.",
    graphic: [
      "https://res.cloudinary.com/resuminator/video/upload/v1630321549/videos/toggle_light_r5dsoz.mp4",
      "https://res.cloudinary.com/resuminator/video/upload/v1630321539/videos/toggle_dark_uoodji.mp4",
    ],
    color: ["#F3CD46", "#F3CD46"],
  },
  {
    title: "Enhanced Design Controls",
    description:
      "With a dedicated design panel, you get to control the look and feel of your resume. Add a color which matches your personality. Alter spacing to fit it more content.",
    graphic: [
      "https://res.cloudinary.com/resuminator/video/upload/v1630321551/videos/design_light_xaucxp.mp4",
      "https://res.cloudinary.com/resuminator/video/upload/v1630321553/videos/design_dark_ohlido.mp4",
    ],
    color: ["cyan.600", "cyan.400"],
  },
  {
    title: "Customizable Sections",
    description:
      "STOP paying to add certain sections on your resume. Create your own custom section in few clicks and use it like any native section for your resume. Add your achievements, contributions, hobbies, anything!",
    graphic: [
      "https://res.cloudinary.com/resuminator/video/upload/v1630321968/videos/custom_section_light_owg0gi.mp4",
      "https://res.cloudinary.com/resuminator/video/upload/v1630321948/videos/custom_section_dark_a0r9zh.mp4",
    ],
    color: ["#26DF82", "#26DF82"],
  },
];

export const LongFeatureDetails: Array<FeatureCardProps> = [
  {
    icon: FiCopy,
    title: "Multiple Resumes",
    details:
      "Put your best foot forward with multiple resumes which duplicate in a click. Use your account data to create different resume for different job profiles.",
    external: "",
  },
  {
    icon: FiColumns,
    title: "One/Two Columns",
    details:
      "Toggle your resume layout between one or two column depending on your details or your recruiter's requirements.",
    external: "",
  },
  {
    icon: FiAtSign,
    title: "Social Handles",
    details:
      "Add social links for your LinkedIn, GitHub, Twitter, Portfolio, Behance and others to your resume. Create custom contact links if your don't find the one you're looking for!",
    external: "",
  },
  {
    icon: FiTarget,
    title: "Detailed Sections",
    details:
      "Carefully drafted sections to help you organize and display all the useful information. Easily create custom sections, if you need something else.",
    external: "",
  },
  {
    icon: RiPaletteLine,
    title: "Powerful Design Controls",
    details:
      "Design your resume with handpicked font pairings, custom colors, and flexible spacing. With grayscale preview to assist you in selecting print-safe colors.",
    external: "",
  },
  {
    icon: FiType,
    title: "Rich Text Editor",
    details:
      "Edit your resume with ease using our Rich Text Editor with Markdown shortcut support. Integrate with Grammarly® to fix errors without leaving Resuminator.",
    external: "",
  },
  {
    icon: FiImage,
    title: "Profile Images",
    details:
      "Put a face to that resume. Add separate profile pictures to your resume (or don't) for the job applications that need it.",
    external: "",
  },
  {
    icon: FiMoon,
    title: "Dark Mode",
    details:
      "Smooth and accessible dark mode support for the late night, last minute resume building sessions. Your eyes will thank you for this.",
    external: "",
  },
];
