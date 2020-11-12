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
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "0.5rem",
    paddingTop: "0.5rem",
    fontFamily: theme.typography.fontFamily.secondary,
  },
}));

function ProjectDescription(props) {
  const classes = useStyles();

  return (
    <Typography color="textPrimary" variant="body2" className={classes.root}>
      {props.desc}
    </Typography>
  );
}

export default ProjectDescription;
