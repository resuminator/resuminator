import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
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
];

export default SocialLinks;
