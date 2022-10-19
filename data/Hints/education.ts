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

const EducationHints: SectionHints = {
  title: "Improving education info",
  content: [{ type: "p", 
             body: "Education is an important key section that recruiters look for in the resume." 
            },
            {
             type: "p",
             body: "You can add the degree that you have obtained from your colleges as well as including your school degree.You must add your most recent degree." 
            },
            {
             type: "p",
             body: "With resuminator you can add your education in more details and arrange them in whichever way you like by clicking and holding the top right drag handle icon of each education section that you are adding!"
            },
            {
             type: "p",
             body: "You can display both grades and percentage with resuminator. If you want convert your grade(CGPA,GPA,SGPA etc.) to percentage(%), just set the maximum value to 100 and it will be converted to percentage(%) in your resume"
            }
           ]
};

export default EducationHints;
