import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    paddingTop: 10,
    display: "flex",
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    opacity: 0.8,
    fontSize: "1em",
    color: "#44318D",
    fontWeight: 600,
    marginBottom: 2,
  },
  subtitle: {
    opacity: 0.6,
    fontSize: "0,9em",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
});

function ProjectTitle(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div id="left" className={classes.left}>
        <div id="title" className={classes.title}>
          {props.title}
        </div>
        <div id="company" className={classes.subtitle}>
          {props.company}{" "}
          {props.addInfo ? `, ${props.addInfo}` : null}
        </div>
      </div>
    </div>
  );
}
export default ProjectTitle;
