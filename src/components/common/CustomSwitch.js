/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import {
  FormControlLabel,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(0),
    width: "12rem",
  },
  label: {
    fontFamily: theme.typography.fontFamily.secondary,
    fontSize: "0.8rem",
  },
}));

export const CustomSwitch = ({ checked, onChange, label }) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.root}
      control={<Switch size="medium" checked={checked} onChange={onChange} />}
      label={
        <Typography
          variant="subtitle1"
          color="primary"
          className={classes.label}
        >
          {label}
        </Typography>
      }
    />
  );
};
