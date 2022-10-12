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

import { SectionHints } from "./types";

const ContactHints: SectionHints = {
  title: "Improve your contact information",
  content: [
    {
      type: "p",
      body: "Having relevant contact info helps recruiters and your referrers to contact you and fill out the referral form respectively."
    },
    {
      type: "p",
      body: "You can add multiple contact details and choose which one to display on your resume. The most common ones are -"
    },
    {
      type: "ul",
      body: ["Email", "Phone", "LinkedIn"]
    },
    {
      type: "p",
      body: "With Resuminator, you can also add your personal website and social media handles like Twitter, LeetCode, GitHub, etc."
    }
  ]
};

export default ContactHints;
