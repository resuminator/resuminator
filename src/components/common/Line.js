/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: (props) => props.color || theme.palette.primary.main,
    backgroundColor: (props) => props.color || theme.palette.primary.main,
    width: "100%",
    height: 1,
    opacity: (props) => props.opacity || 1,
    borderStyle: "inset",
    borderWidth: 0,
    overflow: "hidden",
  },
}));

const ColoredLine = ({color, opacity}) => {
  const classes = useStyles({color, opacity});

  return <hr className={classes.root} />;
};

export default ColoredLine;
