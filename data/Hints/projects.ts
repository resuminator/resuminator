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

const ProjectHints: SectionHints = {
  title: "Hints on adding projects",
  content: [{ type: "p", 
              body: "Having projects can help highlight certain experiences required for any job that you are applying." 
            },
            {
              type: "p",
              body: "You can add your project name along with the description of the project that you have done."
            },
            {
             type: "p",
             body: "With resuminator you can also add additional information, project link(github/gitlab etc.) and tags. "
            }
           ]
};

export default ProjectHints;
