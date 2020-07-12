import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyItems: "flex-start",
    flexDirection: "column",
    paddingTop: 10,
    marginRight: 18,
    width: 240,
  },
  heading: {
    color: "#44318D",
    fontSize: 12,
    fontWeight: 600,
    opacity: 0.8,
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    fontFamily: "Roboto",
    fontSize: 10,
    paddingTop: 5,
    opacity: 0.8,
  },
});

function SkillSet(props) {
  const classes = useStyles();
  const skillList = props.skillList;
  //let key = 0;
  return (
    <div className={classes.root}>
      <div className={classes.heading}>{props.title}</div>
      <div className={classes.list}>
        {skillList.map((item, i) => (
          <span style={{ paddingRight: 3 }} key={i}>
            {item + (i !== skillList.length - 1 ? "," : "")}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillSet;
