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
    width: "100%"
  },
  heading: {
    color: "#44318D",
    fontSize: "1em",
    fontWeight: 600,
    opacity: 0.8,
    paddingTop: 5
  },
  list: {
    textAlign: "left",
    fontFamily: "Roboto",
    fontSize: "0.9em",
    paddingTop: 5,
    opacity: 0.8,
  },
});

function SkillSet(props) {
  const classes = useStyles();
  const skillList = props.skillList;
  //let key = 0;

  const renderListStr = (skillList) => {
    let str = "";
    for (let i = 0; i < skillList.length; i++){
      str = str.concat(skillList[i], ", ")
    }

    return str
  }

  return (
    <div className={classes.root}>
      <div className={classes.heading}>{props.title}</div>
      <div className={classes.list}>
        {renderListStr(skillList)}
      </div>
    </div>
  );
}

export default SkillSet;
