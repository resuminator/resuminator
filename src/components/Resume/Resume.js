/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import React from "react";
import "../../styles/shadow.css";
import "../../styles/page.css";
import Title from "./Title/Title";
import ColoredLine from "../utils/Line";
import Contact from "./Title/Contact";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Projects from "./Projects";
import Skills from "./Skills";

const useStyles = makeStyles({
  watermark: {
    padding: "0.5rem",
  },
  logo: {
    fontWeight: 700,
  },
});

function Resume() {
  const classes = useStyles();
  const NAME = "Vivek Nigam";
  const JOBTITLE = "Full-Stack Software Developer";
  const leftWide = "60%"
  const rightWide = "40%"

  return (
    <Box
      id="resume-paper"
      display="flex"
      flexDirection="column"
      bgcolor="contrast.light"
      className={`shadow`}
      width="21cm"
      minHeight="29.7cm"
    >
      <Title name={NAME} jobTitle={JOBTITLE} />
      <Contact />
      <ColoredLine color="#44318D" />
      <Box display="flex" justifyContent="space-between" id="resume-insider">
        <Box
          display="flex"
          flexDirection="column"
          p={1}
          m={1}
          pr={0}
          width={leftWide}
        >
          <Experience />
          <Education />
          <Certifications />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          p={1}
          m={1}
          pl={0}
          width={rightWide}
          className={classes.right}
        >
          <Skills />
          <Projects />
        </Box>
      </Box>
      <Typography
        color="textSecondary"
        variant="caption"
        align="center"
        id="watermark"
        className={classes.watermark}
      >
        Built using <span className={classes.logo}>Resuminator</span>
      </Typography>
    </Box>
  );
}

export default Resume;
