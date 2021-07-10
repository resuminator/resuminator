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
import { SectionBoxProps } from "./components/SectionBox";

export const getLayout = (key: InputSectionKeys, props: SectionBoxProps) => {
  switch (key) {
    case "EDUCATION":
      return <EducationLayout {...props}/>;
    case "EXPERIENCE":
      return <ExperienceLayout {...props}/>;
    case "PROJECTS":
      return <ProjectLayout {...props}/>;
    case "CERTIFICATIONS":
      return <CertificationsLayout {...props}/>;
    case "PUBLICATIONS":
      return <PublicationsLayout {...props}/>;
    case "SKILLS":
      return <SkillsLayout {...props}/>;
    default: 
      return <CustomSectionLayout sectionKey={key} {...props}/>;
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
