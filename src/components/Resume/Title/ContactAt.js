import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyItems: "space-between",
    padding: 10,
    fontSize: "0.9em",
  },
  icon: {
    fontSize: "1.2em",
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

  const linkHandle = (handle, service) => {
    const handleLink = `https://www.${service}.com/${handle}`

    if (service === "linkedin"){
      const linkedinLink = `https://www.${service}.com/in/${handle}`
      return <Link href={linkedinLink} color="inherit">{handle}</Link>
    }

    if (service === "email"){
      const mailHandle = `mailto:${handle}`
      return <Link href={mailHandle} color="inherit">{handle}</Link>
    }

    return <Link href={handleLink} color="inherit">{handle}</Link>
  }  

  return (
    <div className={classes.root}>
      {setIcon(props.name)}
      {linkHandle(props.handle, props.name)}
    </div>
  );
}

export default ContactAt;
