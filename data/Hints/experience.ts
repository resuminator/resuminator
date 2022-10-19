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

const ExperienceHints: SectionHints = {
  title: "Hints on adding Experience Info",
  content: [{ type: "p", 
             body: "Having experience and adding it to your resume gives credibility to an application or interview." },
            {
              type: "p",
              body: "You can add your job title including any internships that you have completed along with the job title and the organization. You can also add links along with description of your role."
            },
            {
              type: "p",
              body: "With resuminator you can also add certain tags and link involving your job/internship. If you are currently doing any internship or working under any organization you can mark it as present instead of mentioning the end date."
            }
           ]
};

export default ExperienceHints;
