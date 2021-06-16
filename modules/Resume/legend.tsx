import { HeaderElements, InputSectionKeys } from "../../store/types";
import NameAndJobTitleLayout from "./Header/NameAndJT";
import UserImageLayout from "./Header/UserImage";
import SocialHandlesLayout from "./Header/SocialHandles";
import {
  CertificationsLayout,
  EducationLayout,
  ExperienceLayout,
  ProjectLayout,
  PublicationsLayout,
  SkillsLayout,
} from "./Sections";
import CustomSectionLayout from "./Sections/CustomSection";

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
    default: 
      return <CustomSectionLayout sectionKey={key}/>;
  }
};

export const getHeaderLayout = (key: HeaderElements) => {
  switch (key) {
    case "NAME_AND_JT":
      return <NameAndJobTitleLayout />;
    case "USER_IMAGE":
      return <UserImageLayout />;
    case "SOCIAL_HANDLES":
      return <SocialHandlesLayout />;
    default:
      return null;
  }
};
