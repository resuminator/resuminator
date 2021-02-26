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
import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    wordBreak: "break-word",
    width: "90%",
    textAlign: "center",
    padding: "2rem 3rem 1rem 3rem",
  },
  title: {
    fontFamily: theme.typography.fontFamily.primary,
    color: theme.palette.text.primary,
    fontSize: "3rem",
    letterSpacing: "-0.2rem",
  },
  subtitle: {
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: "1.5rem",
    fontWeight: 700,
  },
  large: {
    margin: "1rem",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function BITTitle() {
  const classes = useStyles();
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      textAlign="left"
      className={classes.root}
    >
      <Box textAlign="left" flexDirection="column">
        <Typography variant="h1" className={classes.title}>
          {userInfo.name}
        </Typography>
        <Typography variant="h2" color="secondary" className={classes.subtitle}>
          {userInfo.jobTitle}
        </Typography>
      </Box>
      <Avatar className={classes.large}/>
    </Box>
  );
}

export default BITTitle;
