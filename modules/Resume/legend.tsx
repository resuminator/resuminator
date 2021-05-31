import { InputSectionKeys } from "../../store/types";
import {
  CertificationsLayout,
  EducationLayout,
  ExperienceLayout,
  ProjectLayout,
  PublicationsLayout,
  SkillsLayout
} from "./Sections";

export const getLayout = (key: InputSectionKeys) => {
  switch (key) {
    case "EDUCATION":
      return <EducationLayout />;
    case "EXPERIENCE":
      return <ExperienceLayout />;
    case "PROJECTS":
      return <ProjectLayout />;
    case "CERTIFICATIONS":
      return <CertificationsLayout />;
    case "PUBLICATIONS":
      return <PublicationsLayout />;
    case "SKILLS":
      return <SkillsLayout />;
  }
};
