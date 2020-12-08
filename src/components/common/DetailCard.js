/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "26rem",
    padding: "1rem",
    paddingBottom: "2rem",
    margin: "0.5rem",
    marginLeft: "0rem",
    borderRadius: "1rem",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.contrast.light,
  },
  title: {
    fontWeight: 500,
    fontSize: "1rem",
  },
  subtitle: {
    fontSize: "0.9rem",
    color: theme.palette.text.secondary,
  },
}));

const DetailCard = ({ item, onClick }) => {
  const classes = useStyles();
  return (
    <Paper elevation={2} onClick={onClick} className={classes.root}>
      <Typography variant="body1" className={classes.title}>
        {item.company || "Click to add company info"}
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        {item.jobTitle || "Add Job Title"}
      </Typography>
    </Paper>
  );
};

export default DetailCard;
