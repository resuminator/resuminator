/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    width: "1rem",
    textTransform: "none",
    fontFamily: theme.typography.fontFamily.primary,
    color: theme.palette.secondary.dark,
    borderColor: theme.palette.secondary.dark,
  },
}));
function RemoveButton(props) {
  const classes = useStyles();

  return (
    <Button variant="outlined" className={classes.root} onClick={props.onClick}>
      <Typography variant="caption">Remove</Typography>
    </Button>
  );
}

export default RemoveButton;
