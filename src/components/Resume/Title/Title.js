import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center" 
  },
  name: {
    color: "#121212",
    fontSize: "3em",
    padding: 10,
  },
  jobtitle: {
    color: "#44318D",
    fontSize: "1.1em",
    marginBottom: 10
  },
});

function Title(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.jobtitle}>{props.jobTitle}</div>
    </div>
  );
}

export default Title;
