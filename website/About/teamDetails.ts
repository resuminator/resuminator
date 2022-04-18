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

import { TeamMember } from "./types";

export const teamDetails: Array<TeamMember> = [
  {
    image:
      "https://user-images.githubusercontent.com/30192068/163840746-0747b937-4dc8-443a-a367-c8df7afa6afd.png",
    fullName: "Vivek Nigam",
    jobTitle: "Creator, Lead Developer",
    bio: "Collects dozens of typefaces, uses only two. Part-time mentor. Frontend and Design, execution and strategy.",
    social: [
      {
        label: "Twitter",
        link: "@_viveknigam_"
      },
      {
        label: "LinkedIn",
        link: "viveknigam3003"
      },
      {
        label: "GitHub",
        link: "viveknigam3003"
      },
      {
        label: "Email",
        link: "vivek@resuminator.in"
      }
    ]
  },
  {
    image:
      "https://user-images.githubusercontent.com/30192068/163839269-85bb12b2-74b7-4d4e-9972-f44dfa00b19b.png",
    fullName: "Himanshu Garg",
    jobTitle: "Creator, Backend Wizard",
    bio: "The guy senior devs tell you not to worry about. Handles everything system design, dev-ops and backend.",
    social: [
      {
        label: "Twitter",
        link: "@_mercurybuddy"
      },
      {
        label: "LinkedIn",
        link: "garg-himanshu"
      },
      {
        label: "GitHub",
        link: "merrcury"
      },
      {
        label: "Email",
        link: "himanshu@resuminator.in"
      }
    ]
  }
];
