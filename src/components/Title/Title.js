/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    wordBreak: "break-word",
    width: "100%",
    textAlign: "center"
  },
  title: {
    fontFamily: theme.typography.fontFamily.primary,
    color: theme.palette.text.primary,
    fontSize: "3rem",
    paddingBottom: "0.5rem",
    letterSpacing: "-0.2rem",
    padding: "2rem",
  },
  subtitle: {
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: "1.5rem",
    padding: "2rem",
    fontWeight: 700,
    paddingTop: 0,
    paddingBottom: 0
  },
}));

function Title() {
  const classes = useStyles();
  const userInfo = useSelector(state => state.userInfo);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      className={classes.root}
    >
      <Typography variant="h1" className={classes.title}>
        {userInfo.name}
      </Typography>
      <Typography variant="h2" color="primary" className={classes.subtitle}>
        {userInfo.jobTitle}
      </Typography>
    </Box>
  );
}

export default Title;
