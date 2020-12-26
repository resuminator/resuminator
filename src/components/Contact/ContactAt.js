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

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "0.9em",
  },
  icon: {
    fontSize: "1.2em",
    marginRight: 5,
  },
  links: {
    textDecoration: "none",
    fontFamily: theme.typography.fontFamily.primary,
  },
}));

function ContactAt({socialMedia, link}) {
  const classes = useStyles();

  const setIcon = (name) => {
    if (name === "github") return <FiGithub className={classes.icon} />;
    if (name === "linkedin") return <FiLinkedin className={classes.icon} />;
    if (name === "twitter") return <FiTwitter className={classes.icon} />;
    if (name === "email") return <FiMail className={classes.icon} />;
  };

  const linkHandle = (link) => {
    return link
      .split("/")
      .filter((item) => item !== "")
      .slice(-1)[0];
  };

  const getHandleFromLink = (name, link) => {
    if (name === "email")
      return (
        <Link
          href={`mailto:${link}`}
          color="inherit"
          target="_blank"
          className={classes.links}
        >
          {link || ""}
        </Link>
      );

    if (["linkedin", "twitter", "github"].includes(name))
      return (
        <Link
          href={link}
          color="inherit"
          target="_blank"
          className={classes.links}
        >
          {linkHandle(link) || ""}
        </Link>
      );

    return "";
  };

  return (
    <Box
      display="flex"
      justifyItems="space-between"
      p={2}
      className={classes.root}
    >
      {setIcon(socialMedia)}
      {getHandleFromLink(socialMedia, link)}
    </Box>
  );
}

export default ContactAt;
