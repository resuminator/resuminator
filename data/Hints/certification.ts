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

const CertificationHints: SectionHints = {
  title: "How to show certifications",
  content: [
    { type: "p", body: "Please add any certifications that you have done which involves completing any accredited institutions course and passing it's requirements" },
    { type: "p", body: "Please don't just describe the course. We recommend you to attach any certification proof(link provided) along with the course details" }
  ]
};

export default CertificationHints;
