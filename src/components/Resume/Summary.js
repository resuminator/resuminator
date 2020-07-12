import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyItems: "flex-start",
    margin: 20,
  },
  title: {
    color: "#44318D",
    fontSize: 16,
    fontWeight: 400,
  },
  p: {
    textAlign: "left",
    fontFamily: "Roboto",
    opacity: 0.6,
    fontSize: 12,
    width: "100%",
    paddingTop: 10,
  },
});

function Summary() {
  const classes = useStyles();
  return (
    <div id="summary" className={classes.root}>
      <div id="title" className={classes.title}>
        Summary
      </div>
      <div className={classes.p}>
        I am a full stack software developer and machine learning engineer
        interested in pursuing a Master's Degree in Computer Science or Software
        Engineering. I have a fair background in designing and deploying AI/ML
        Models, full-stack Software Development, Probability, and Statistics
        through relevant internships and projects which I pursued during my
        undergraduate study.
      </div>
    </div>
  );
}

export default Summary;
