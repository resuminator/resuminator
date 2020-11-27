/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "1rem",
  },
  heading: {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  subtitle: {
    fontSize: "0.8rem",
  },
}));

function ContactInput() {
  const classes = useStyles();
  return (
    <Box mt={2} p={2}>
      <Typography variant="body1" color="primary" className={classes.heading}>
        Connect your social accounts
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        className={classes.subtitle}
      >
        Help us verify your social media handles
      </Typography>
      <Box display="flex" justifyItems="space-between" pt={1}>
        <IconButton>
          <FiGithub />
        </IconButton>
        <IconButton>
          <FiLinkedin />
        </IconButton>
        <IconButton>
          <FiTwitter />
        </IconButton>
        <IconButton>
          <FiMail />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ContactInput;
