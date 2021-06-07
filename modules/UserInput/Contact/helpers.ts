import {
  FaGithub,
  FaLink,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { ContactData, Services } from "./types";

export const getIconForService = (label: Services) => {
  switch (label) {
    case "LinkedIn":
      return FaLinkedin;
    case "Twitter":
      return FaTwitter;
    case "GitHub":
      return FaGithub;
    case "Email":
      return FiMail;
    case "Phone":
      return FaPhoneAlt;
    case "Portfolio":
      return FaUserAlt;
    default:
      return FaLink;
  }
};

export const getColorSchemeForService = (label: Services) => {
  switch (label) {
    case "LinkedIn":
      return "cyan.600";
    case "Twitter":
      return "cyan.400";
    case "GitHub":
      return "gray";
    case "Email":
      return "teal";
    case "Phone":
      return "green.500";
    case "Portfolio":
      return "purple.500";
    default:
      return "blue.500";
  }
};

export const labelIsPresent = (data: ContactData, label: Services): boolean => {
  const keys = data.map((item) => item.label);
  return keys.includes(label);
};

export const generateLinkForLabel = (label: Services, link: string) => {
  switch (label) {
    case "LinkedIn":
      return `https://linkedin.com/in/${link}`;
    case "Twitter":
      return `https://twitter.com/${link}`;
    case "GitHub":
      return `https://github.com/${link}`;
    case "Email":
      return `mailto:${link}`;
    case "Phone":
      return `tel:${link}`;
    case "Portfolio":
      return `https://${link}`;
    default:
      return link;
  }
}
