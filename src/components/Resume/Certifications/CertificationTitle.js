import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
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
    fontSize: "0.9em"
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
});

function CertificationTitle(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div id="left" className={classes.left}>
        <div id="name" className={classes.title}>
          {props.name}
        </div>
        <div id="authority" className={classes.subtitle}>
          {props.authority} {props.number ? ` | ${props.number}` : null}{" "}
          {props.duration ? ` | Expires: ${props.duration.end}` : null}
        </div>
      </div>
    </div>
  );
}

export default CertificationTitle;
