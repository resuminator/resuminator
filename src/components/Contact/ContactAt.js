/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, Link, makeStyles } from "@material-ui/core";
import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: "0.9em",
  },
  icon: {
    fontSize: "1.2em",
    marginRight: 5,
  },
  links: {
    textDecoration: "none",
    fontFamily: theme.typography.fontFamily.primary
  }
}));

function ContactAt(props) {
  const classes = useStyles();

  function setIcon(name) {
    if (name === "github") return <FiGithub className={classes.icon} />;
    if (name === "linkedin") return <FiLinkedin className={classes.icon} />;
    if (name === "twitter") return <FiTwitter className={classes.icon} />;
    if (name === "email") return <FiMail className={classes.icon} />;
  }

  const linkHandle = (handle, service) => {
    const handleLink = `https://www.${service}.com/${handle}`

    if (service === "linkedin"){
      const linkedinLink = `https://www.${service}.com/in/${handle}`
      return <Link href={linkedinLink} color="inherit" target="_blank" className={classes.links}>{handle}</Link>
    }

    if (service === "email"){
      const mailHandle = `mailto:${handle}`
      return <Link href={mailHandle} color="inherit" target="_blank" className={classes.links}>{handle}</Link>
    }

    return <Link href={handleLink} color="inherit" target="_blank" className={classes.links}>{handle}</Link>
  }  

  return (
    <Box display="flex" justifyItems="space-between" p={2} className={classes.root}>
      {setIcon(props.name)}
      {linkHandle(props.handle, props.name)}
    </Box>
  );
}

export default ContactAt;
