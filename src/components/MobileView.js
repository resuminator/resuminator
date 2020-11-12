/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: "3rem",
    letterSpacing: "-0.2rem",
    fontWeight: 700,
    padding: "2rem",
    paddingBottom: "0rem",
  },
  h3: {
    fontSize: "2rem",
    padding: "2rem",
    paddingBottom: "3rem",
    color: theme.palette.primary.light,
    opacity: 0.8,
  },
  body1: {
    fontFamily: "Roboto",
    padding: "4rem",
    paddingLeft: "2rem",
    color: theme.palette.primary.light,
    opacity: 0.8,
  },
}));

function MobileView() {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h1" color="primary" className={classes.h1}>
        Resuminator
      </Typography>
      <Typography variant="h3" color="textSecondary" className={classes.h3}>
        We notice that you're trying use access this application on a mobile
        device :/
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.body1}
      >
        We're working hard to bring the Resuminator experience to your mobile
        device soon!
      </Typography>
    </Box>
  );
}

export default MobileView;
