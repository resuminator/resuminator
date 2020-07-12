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
    fontSize: 35,
    padding: 5,
  },
  jobtitle: {
    color: "#44318D",
    fontSize: 14,
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
