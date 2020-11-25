/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import React from "react";
import { makeStyles } from "@material-ui/core";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "0.5rem",
    paddingTop: "0.5rem",
    fontFamily: theme.typography.fontFamily.secondary,
    color: theme.palette.text.primary,
    fontSize: "0.9rem",
  },
}));

function ProjectDescription(props) {
  const classes = useStyles();

  return <ReactMarkdown className={classes.root} children={props.desc} />;
}

export default ProjectDescription;
