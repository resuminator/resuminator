/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "26rem",
    flexDirection: "column",
    padding: "1rem",
    margin: "1rem",
    marginLeft: "0rem",
    borderRadius: "1rem",
    backgroundColor: theme.palette.contrast.light,
  },
}));

export const InputCard = ({id, children, onClick}) => {
  const classes = useStyles();
  return (
    <Paper component="form" elevation={2} className={classes.root} key={id} onClick={onClick}>
      {children}
    </Paper>
  );
};
