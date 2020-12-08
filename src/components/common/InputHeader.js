/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { makeStyles, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

const useStyles = makeStyles({
  heading: {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  subtitle: {
    fontSize: "0.8rem",
  },
});

export const InputHeader = ({ heading, subtitle }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography color="primary" variant="body1" className={classes.heading}>
        {heading}
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
        className={classes.subtitle}
      >
        {subtitle}
      </Typography>
    </Fragment>
  );
};
