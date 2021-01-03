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
import { parseDateView } from "../../utils/Helpers";
import { TitleBox } from "../common/TitleBox";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.light,
    fontSize: "1em",
    fontWeight: 700,
  },
  subtitle: {
    color: theme.palette.grey[600],
    fontSize: "0.9em",
  },
}));

function EducationTitle(props) {
  const classes = useStyles();
  return (
    <TitleBox id="Education-Title">
      <Box textAlign="left" width="70%">
        <Typography id="title" variant="h2" className={classes.title}>
          {props.institute}
        </Typography>
        <Typography
          id="stream"
          variant="subtitle1"
          className={classes.subtitle}
        >
          {props.degree} {props.stream}{" "}
          {props.grade ? `, ${props.grade}/${props.total}` : null}
        </Typography>
      </Box>
      <Box textAlign="right" width="30%">
        <Typography id="duration" className={classes.title}>
          {parseDateView(props.duration.start, "year")} - {parseDateView(props.duration.end, "year")}
        </Typography>
        <Typography id="location" className={classes.subtitle}>
          {props.location}
        </Typography>
      </Box>
    </TitleBox>
  );
}
export default EducationTitle;
