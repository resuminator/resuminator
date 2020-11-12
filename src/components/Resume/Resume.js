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
import "./Resume.css";
import Title from "./Title/Title";
import ColoredLine from "../utils/Line";
import Contact from "./Title/Contact";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import { makeStyles } from "@material-ui/core";
import Projects from "./Projects";
import Skills from "./Skills";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fffffe",
    fontFamily: "Karla",
    margin: theme.typography.pxToRem(25),
    right: theme.typography.pxToRem(0),
    float: "right",
    flex: "1 0 48rem"
  },
  left: {
    width: "60%",
    height: theme.typography.pxToRem(1024),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "start",
    padding: theme.typography.pxToRem(10),
    paddingRight: theme.typography.pxToRem(0),
    margin: theme.typography.pxToRem(10),
  },
  right: {
    width: "40%",
    height: theme.typography.pxToRem(1024),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyItems: "flex-start",
    padding: theme.typography.pxToRem(10),
    margin: theme.typography.pxToRem(10),
    paddingLeft: 0,
    overflow: "hidden",
  },
  inside: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: "100%",
  },
  watermark: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    position: "relative",
    bottom: 0,
    right: 0,
    padding: theme.typography.pxToRem(10),
    fontSize: theme.typography.pxToRem(11),
    opacity: 0.5,
    width: "97.5%"
    // backgroundColor: "green",
  },
  logo: {
    paddingLeft: 2,
    fontWeight: 600,
  },
}));

function Resume(props) {
  const classes = useStyles();
  const defaultConfig = `${classes.root} shadow`;

  return (
    <div
      id="resume-paper"
      className={props.config ? props.config : `${defaultConfig} page`}
    >
      <Title name="Vivek Nigam" jobTitle="Full-Stack Software Developer" />
      <Contact />
      <ColoredLine color="#44318D" />
      <div id="resume-insider" className={classes.inside}>
        <div className={classes.left}>
          <Experience />
          <Education />
          <Certifications />
        </div>
        <div className={classes.right}>
          <Skills />
          <Projects />
        </div>
      </div>
      <div id="watermark" className={classes.watermark}>
        Built using <span className={classes.logo}>Resuminator</span>
      </div>
    </div>
  );
}

export default Resume;
