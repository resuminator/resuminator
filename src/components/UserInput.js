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
import BasicInfo from "./UserInput/BasicInfo";
import CertificationInfo from "./UserInput/CertificationInfo";
import ContactInfo from "./UserInput/ContactInfo";
import EducationInfo from "./UserInput/EducationInfo";
import ExperienceInfo from "./UserInput/ExperienceInfo";
import ProjectInfo from "./UserInput/ProjectInfo";

function UserInput() {
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

export default UserInput;
