import React from "react";
import { Link, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 10,
    display: "flex",
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    opacity: 0.8,
    fontSize: theme.typography.pxToRem(16),
    color: "#44318D",
    fontWeight: 600,
    marginBottom: 2,
  },
  subtitle: {
    opacity: 0.6,
    fontSize: theme.typography.pxToRem(14),
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
}));

function ProjectTitle(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div id="left" className={classes.left}>
        <Typography id="title" variant="div" className={classes.title}>
          <Link href={props.projectLink} target="_blank">{props.title}</Link>
        </Typography>
        <div id="company" className={classes.subtitle}>
          {props.company} {props.addInfo ? `, ${props.addInfo}` : null}
        </div>
      </div>
    </div>
  );
}
export default ProjectTitle;
