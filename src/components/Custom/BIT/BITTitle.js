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
import { useSelector } from "react-redux";
import ImageUpload from "./ImageUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    wordBreak: "break-word",
    width: "90%",
    textAlign: "center",
    padding: "1rem 3rem 1rem 3rem",
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
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  icon: {
    color: theme.palette.getContrastText(theme.palette.primary.light),
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
        <Typography variant="h2" color="primary" className={classes.subtitle}>
          {userInfo.jobTitle}
        </Typography>
      </Box>
      <ImageUpload />
    </Box>
  );
}

export default BITTitle;
