/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

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
    case "Dribbble":
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
    case "Dribbble":
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
    case "Dribbble":
      return `https://dribbble.com/${link}`;
    case "YouTube":
      return `https://www.youtube.com/c/${link}`;
    default:
      return link;
  }
};
