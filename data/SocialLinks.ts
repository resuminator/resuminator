import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IconType } from "react-icons/lib";

export interface SocialDataObject {
  ariaLabel?: string;
  icon?: IconType;
  link?: string;
}

const SocialLinks: Array<SocialDataObject> = [
  {
    ariaLabel: "Resuminator-Github",
    icon: AiOutlineGithub,
    link: "https://github.com/resuminator/resuminator",
  },
  {
    ariaLabel: "Resuminator-Twitter",
    icon: AiOutlineTwitter,
    link: "https://twitter.com/resuminator",
  },
  {
    ariaLabel: "Resuminator-LinkedIn",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/company/resuminator",
  },
  {
    ariaLabel: "Resuminator-Instagram",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/resuminator",
  },
];

export default SocialLinks;
