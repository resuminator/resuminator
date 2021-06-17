import { ColorProps } from "@chakra-ui/react";
import {
  FaBehance,
  FaDribbble,
  FaGithub,
  FaGitlab,
  FaLink,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaUserAlt,
  FaYoutube,
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
    case "Dribble":
      return FaDribbble;
    case "Behance":
      return FaBehance;
    case "GitLab":
      return FaGitlab;
    case "YouTube":
      return FaYoutube;
    default:
      return FaLink;
  }
};

export const getColorSchemeForService = (
  label: Services
): ColorProps["color"] => {
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
    case "GitLab":
      return "orange.500";
    case "Behance":
      return "blue.500";
    case "Dribble":
      return "pink.500";
    case "YouTube":
      return "red.500";
    default:
      return "blue.500";
  }
};

export const labelIsPresent = (data: ContactData, label: Services): boolean => {
  const keys = data.map((item) => item.label);
  return keys.includes(label);
};

export const generateLinkForLabel = (label: Services | string, link: string) => {
  switch (label) {
    case "LinkedIn":
      return `https://linkedin.com/in/${link}`;
    case "Twitter":
      return `https://twitter.com/${link}`;
    case "GitHub":
      return `https://github.com/${link}`;
    case "GitLab":
      return `https://gitlab.com/${link}`;
    case "Email":
      return `mailto:${link}`;
    case "Phone":
      return `tel:${link}`;
    case "Portfolio":
      return `https://${link}`;
    case "Behance":
      return `https://behance.net/${link}`;
    case "Dribble":
      return `https://dribbble.com/${link}`;
    case "YouTube":
      return `https://www.youtube.com/c/${link}`;
    default:
      return link;
  }
};
