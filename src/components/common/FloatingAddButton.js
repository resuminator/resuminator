/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import { FiPlus } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.contrast.light,
    color: theme.palette.primary.main,
    border: "dashed",
    borderWidth: "0.1rem",
    width: "3.2rem",
    "&:hover, &:active": {
      border: "solid",
      borderWidth: "0.1rem",
      color: theme.palette.contrast.light,
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

function FloatingAddButton(props) {
  const classes = useStyles();
  return (
    <IconButton className={classes.root} onClick={props.onClick}>
      <FiPlus />
    </IconButton>
  );
}

export default FloatingAddButton;
