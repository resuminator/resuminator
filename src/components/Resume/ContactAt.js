import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyItems: "space-between",
    padding: 10,
    fontSize: 10,
  },
  icon: {
    fontSize: 12,
    marginRight: 5,
  },
});

function ContactAt(props) {
  const classes = useStyles();

  function setIcon(name) {
    if (name === "github") return <GitHubIcon className={classes.icon} />;
    if (name === "linkedin") return <LinkedInIcon className={classes.icon} />;
    if (name === "twitter") return <TwitterIcon className={classes.icon} />;
    if (name === "email") return <EmailIcon className={classes.icon} />;
  }

  return (
    <div className={classes.root}>
      {setIcon(props.name)}
      {props.handle}
    </div>
  );
}

export default ContactAt;
