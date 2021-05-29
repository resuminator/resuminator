import { SpacingProfile, InputSectionKeys } from "../../store/types";
import {
  CertificationsLayout,
  EducationLayout,
  ExperienceLayout,
  ProjectLayout,
  PublicationsLayout,
  SkillsLayout
} from "./Sections";

export const getSpacingFactor = (profile: SpacingProfile) => {
  switch (profile) {
    case "COMPACT":
      return 0.5;
    case "NORMAL":
      return 1;
    case "AIRY":
      return 2;
    default:
      return 1;
  }
};

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
