/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box } from "@material-ui/core";
import React from "react";
import CertificationInput from "../Certifications/CertificationInput";
import EducationInput from "../Education/EducationInput";
import ExperienceInput from "../Experience/ExperienceInput";
import ProjectInput from "../Projects/ProjectInput";
import SkillsInput from "../Skills/SkillsInput";
import TitleInput from "../Title/TitleInput";

function InputLayout() {
  return (
    <Box display="flex" flexDirection="column">
      <TitleInput />
      <ExperienceInput />
      <EducationInput />
      <ProjectInput />
      <CertificationInput />
      <SkillsInput />
    </Box>
  );
}

export default InputLayout;
