import React from "react";
import "./Resume.css";
import Title from "./Title/Title";
import ColoredLine from "../Line";
import Contact from "./Title/Contact";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import { makeStyles } from "@material-ui/core";
import Projects from "./Projects";
import Skills from "./Skills";

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fffffe",
    fontFamily: "Karla",
    margin: 25,
    right: 0,
    float: "right",
    flex: "1 0 48em"
  },
  left: {
    width: "60%",
    height: 1024,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "start",
    padding: 10,
    paddingRight: 0,
    margin: 10,
  },
  right: {
    width: "40%",
    height: 1024,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyItems: "flex-start",
    padding: 10,
    margin: 10,
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
    padding: 10,
    fontSize: "0.7em",
    opacity: 0.5,
    backgroundColor: "green",
  },
  logo: {
    paddingLeft: 2,
    fontWeight: 600,
  },
});

function Resume(props) {
  const classes = useStyles();
  const defaultConfig = `${classes.root} shadow`;

  return (
    <div
      id="resume-paper"
      className={props.config ? props.config : `${defaultConfig} page`}
    >
      <Title name="Vivek Nigam" jobTitle="Software Developer | ML Engineer" />
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
