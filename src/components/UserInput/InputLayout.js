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
import { useSelector } from "react-redux";
import "../../styles/noscroll.css";
import CertificationInput from "../Certifications/CertificationInput";
import ContactInput from "../Contact/ContactInput";
import EducationInput from "../Education/EducationInput";
import ExperienceInput from "../Experience/ExperienceInput";
import ProjectInput from "../Projects/ProjectInput";
import SkillsInput from "../Skills/SkillsInput";
import TitleInput from "../Title/TitleInput";

function InputLayout() {
  const settings = useSelector((state) => state.settings);
  const modules = settings.modules;
  const combinedList = modules.left.concat(modules.right);

  const showInput = (name) => {
    return combinedList.includes(name);
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="29.7cm"
      overflow="auto"
      className="no-scroll"
    >
      <TitleInput />
      <ContactInput />
      {showInput("exp") ? <ExperienceInput /> : null}
      {showInput("edu") ? <EducationInput /> : null}
      {showInput("proj") ? <ProjectInput /> : null}
      {showInput("certs") ? <CertificationInput />: null}
      {showInput("skill") ? <SkillsInput /> : null}
    </Box>
  );
}

export default InputLayout;
