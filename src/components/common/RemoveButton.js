/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem 1rem 0rem 1rem",
    width: "1rem",
    fontFamily: "Karla",
    textTransform: "none",
    color: theme.palette.secondary.dark,
    borderColor: theme.palette.secondary.dark,
  },
}));
function RemoveButton(props) {
  const classes = useStyles();

  return (
    <Button
      size="small"
      variant="outlined"
      className={classes.root}
      onClick={props.onClick}
    >
      Remove
    </Button>
  );
}

export default RemoveButton;
