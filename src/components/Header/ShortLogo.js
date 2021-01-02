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
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontWeight: 700,
    paddingRight: "0.5rem",
    letterSpacing: "-0.25rem",
    fontFamily: "Karla",
    border: "solid",
    borderColor: theme.palette.contrast.main,
    borderWidth: "0.1rem",
  },
  link: {
    textDecoration: "none",
  },
}));

const ShortLogo = () => {
  const classes = useStyles();
  return (
    <Link to="/" className={classes.link}>
      <Typography
        id="logo"
        variant="h4"
        className={classes.logo}
        color="primary"
      >
        Re
      </Typography>
    </Link>
  );
};

export default ShortLogo;
