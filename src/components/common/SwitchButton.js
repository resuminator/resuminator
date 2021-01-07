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
    marginTop: "1rem",
    letterSpacing: "-0.01rem",
    fontFamily: "Roboto",
    color: theme.palette.text.secondary,
  },
}));

const SwitchButton = ({ name, checked, onChange, label }) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.root}
      control={
        <Switch
          checked={checked}
          size="small"
          onChange={onChange}
          name={name}
        />
      }
      label={
        <Typography variant="body2">{label || "Show on resume"}</Typography>
      }
    />
  );
};

export default SwitchButton;
