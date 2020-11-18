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
import BasicInfo from "./BasicInfo";
import CertificationInfo from "./CertificationInfo";
import ContactInfo from "./ContactInfo";
import EducationInfo from "./components/Education/EducationInfo";
import ExperienceInfo from "./components/Experience/ExperienceInfo";
import ProjectInfo from "./components/Projects/ProjectInfo";

function InputLayout() {
  return (
    <Box display="flex" flexDirection="column">
      <BasicInfo />
      <ContactInfo />
      <ExperienceInfo />
      <EducationInfo />
      <ProjectInfo />
      <CertificationInfo />
    </Box>
  );
}

export default InputLayout;
