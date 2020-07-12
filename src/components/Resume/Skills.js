import React from "react";
import { makeStyles } from "@material-ui/core";
import ColoredLine from "../Line";
import skillsInfo from "../Data/SkillsInfo";
import SkillSet from "./Skills/SkillSet";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyItems: "flex-start",
    margin: 20,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: "auto",
  },
  title: {
    color: "#44318D",
    fontSize: 16,
    fontWeight: 400,
  },
  heading: {
    color: "#44318D",
    fontSize: 12,
    fontWeight: 400,
    opacity: 0.8,
  },
  desc: {
    textAlign: "justify",
    paddingTop: 5,
    width: 300,
    fontFamily: "Roboto",
    fontSize: 10,
    opacity: 0.8,
    marginBottom: 5,
  },
  span: {
    fontWeight: 600,
  },
});

function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="title" className={classes.title}>
        Skills
      </div>
      <ColoredLine color="#44318D" opacity="0.5" />
      {skillsInfo.map((item) => (
        <SkillSet key={item.id} title={item.title} skillList={item.skillList} />
      ))}
    </div>
  );
}

export default Skills;
