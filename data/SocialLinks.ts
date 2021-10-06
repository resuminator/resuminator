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

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter
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
    link: "https://github.com/resuminator/resuminator"
  },
  {
    ariaLabel: "Resuminator-Twitter",
    icon: AiOutlineTwitter,
    link: "https://twitter.com/resuminator"
  },
  {
    ariaLabel: "Resuminator-LinkedIn",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/company/resuminator"
  },
  {
    ariaLabel: "Resuminator-Instagram",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/resuminator"
  }
];

export default SocialLinks;
