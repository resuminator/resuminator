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

const useStyles = makeStyles({
  h2: {
    fontFamily: "Karla",
    letterSpacing: "-0.05rem",
    fontWeight: 700,
    fontSize: "2.5rem",
    color: grey[900],
  },
  h3: {
    paddingTop: "2rem",
    fontFamily: "Karla",
    fontSize: "1.5rem",
    color: grey[900],
    letterSpacing: "-0.05rem",
  },
  TextField: {
    marginTop: "0.2rem",
    fontFamily: "Roboto",
  },
  textLabel: {
    color: grey[600],
    fontSize: "0.9rem",
    marginTop: "1rem",
  },
});

const PersonalDetails = ({ user }) => {
  const classes = useStyles();
  return (
    <Box
      alignItems="flex-start"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Typography variant="h2" className={classes.h2}>
        Your Account
      </Typography>
      <Typography variant="h3" className={classes.h3}>
        Personal Details
      </Typography>
      <Box display="flex" flexDirection="column" width="18rem">
        <Typography className={classes.textLabel}>Full Name</Typography>
        <Typography className={classes.TextField}>
          {user.name || "-"}
        </Typography>
        <Typography className={classes.textLabel}>Job Title</Typography>
        <Typography className={classes.TextField}>
          {user.jobTitle || "-"}
        </Typography>
        <Typography className={classes.textLabel}>Email Address</Typography>
        <Typography className={classes.TextField}>
          {user.email || "-"}
        </Typography>
      </Box>
    </Box>
  );
};

export default PersonalDetails;
