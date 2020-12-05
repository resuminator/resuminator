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
import { TitleBox } from "../common/TitleBox";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.light,
    fontSize: "1rem",
    fontWeight: 600,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: "0.9rem",
  },
}));

function JobTitle(props) {
  const classes = useStyles();

  const parseDateView = (date) =>{
    const obj = new Date(date);
    return obj.toLocaleString([], { month: "short", year: "numeric" });}

  return (
    <TitleBox id="Job-Title-Box">
      <Box
        id="left"
        textAlign="left"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Typography id="title" variant="h2" className={classes.title}>
          {props.company}
        </Typography>
        <Typography
          id="company"
          variant="subtitle1"
          color="textPrimary"
          className={classes.subtitle}
        >
          {props.title} {props.addInfo ? `(${props.addInfo})` : null}
        </Typography>
      </Box>
      <Box id="right" textAlign="right">
        <Typography
          id="duration"
          variant="h2"
          color="primary"
          className={classes.title}
        >
          {parseDateView(props.duration.start)} - {parseDateView(props.duration.end)}
        </Typography>
        <Typography
          id="location"
          variant="subtitle1"
          color="textPrimary"
          className={classes.subtitle}
        >
          {props.location}
        </Typography>
      </Box>
    </TitleBox>
  );
}

export default JobTitle;
