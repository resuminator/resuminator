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
import { grey } from "@material-ui/core/colors";
import React from "react";
import ModuleToggle from "../Settings/ModuleToggle";

const useStyles = makeStyles({
  h3: {
    paddingTop: "2rem",
    fontFamily: "Karla",
    fontSize: "1.5rem",
    letterSpacing: "-0.05rem",
    fontWeight: 700,
    color: grey[900],
  },
  subtitle: {
    fontFamily: "Roboto",
    margin: "0.4rem 0 0.8rem 0",
    fontSize: "0.9rem",
    color: grey[600],
  },
  textLabel: {
    color: grey[900],
    fontSize: "1.2rem",
    marginTop: "1rem",
    fontWeight: 700,
    letterSpacing: "-0.02rem",
  },
});

const Preferences = () => {
  const classes = useStyles();

  return (
    <Box
      alignItems="flex-start"
      height="100%"
      display="flex"
      flexDirection="column"
      width="100%"
      pt={4}
    >
      <Typography variant="h3" className={classes.h3}>
        Preferences
      </Typography>
      <Typography variant="body1" className={classes.textLabel}>
        Resume Sections
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Select which sections you would like to see on your Resume. Your data
        won't be affected.
      </Typography>
      <ModuleToggle />
    </Box>
  );
};

export default Preferences;
