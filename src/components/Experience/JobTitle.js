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
import { parseDateView, parseEndDate } from "../../utils/Helpers";
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

  const duration = () => {
    const { start, end } = props.duration;
    return `${parseDateView(start)} - ${parseEndDate(end)}`;
  };

  return (
    <TitleBox id="Job-Title-Box">
      <Box
        id="left"
        textAlign="left"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        width="65%"
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
      <Box id="right" textAlign="right" width="35%">
        <Typography
          id="duration"
          variant="h2"
          color="primary"
          className={classes.title}
        >
          {duration()}
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
