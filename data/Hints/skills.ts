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

const SkillsHints: SectionHints = {
  title: "Adding skills to your resume",
  content: [{ type: "p", 
              body: "Having skills shows the recruiters that you have the abilities required to succeed in the role in which you are applying." 
            },
            {
              type: "p",
              body: "With Resuminator you can add those skills in your resume more conveniently. You can mention the category under which your skill belongs. For example python belongs to programming language, keras belongs to machine learning framework tool."
            }
           ]
};

export default SkillsHints;
