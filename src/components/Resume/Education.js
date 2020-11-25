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
import EducationTitle from "./Education/EducationTitle";
import ColoredLine from "../utils/Line";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    fontSize: "1.5rem",
  },
  box: {
    width: "100%",
  },
  desc: {
    fontFamily: theme.typography.fontFamily.secondary,
    fontSize: "0.8rem",
    textAlign: "justify",
    color: theme.palette.grey[800],
  },
  span: {
    fontWeight: 600,
    fontSize: "0.8rem",
  },
}));

function Education() {
  const classes = useStyles();
  const allEducation = useSelector((state) => state.educationInfo);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyItems="flex-start"
      className={classes.root}
      pb={2}
    >
      <Typography id="title" variant="h1" className={classes.title}>
        Education
      </Typography>
      <ColoredLine color="#44318D" opacity="0.5" />
      {allEducation.map((item) => (
        <Box id={`${item.institute}-edu`} className={classes.box} key={item.id}>
          <EducationTitle
            institute={item.institute}
            location={item.location}
            stream={item.stream}
            duration={{ start: item.start, end: item.end }}
            grade={item.grade}
            degree={item.degree}
            total={item.total}
          />
          <ReactMarkdown className={classes.desc} children={item.description}/>
        </Box>
      ))}
    </Box>
  );
}

export default Education;
