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

const PublicationHints: SectionHints = {
  title: "Showing Publications on Resume",
  content: [{ type: "p", 
              body: "Having publications proves your experience and knowledge on a particular area. It also shows your good analytical and writing skills." 
            },
            {
              type: "p",
              body: "You can add any research paper that you have completed along with any other authors who have also done the research and have worked with you."
            },
            {
              type: "p",
              body: "With Resuminator you can add many more details about your publication paper including your date of issue, and also change your display style. You just have to write the requirements and Resuminator will take care of everything else!" 
            }
           ]
};

export default PublicationHints;
