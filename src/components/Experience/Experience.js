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
import { checkEmptyState } from "../../utils/Helpers";
import ColoredLine from "../common/Line";
import JobDescription from "./JobDescription";
import JobTitle from "./JobTitle";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    fontSize: "1.5em",
  },
  exp: {
    width: "100%",
  },
}));

function Experience() {
  const classes = useStyles();
  const experiences = useSelector((state) => state.experienceInfo.experiences);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyItems="flex-start"
      pb={2}
    >
      <Typography id="title" variant="h1" className={classes.title}>
        Experience
      </Typography>
      <ColoredLine opacity={0.5} />
      {checkEmptyState(experiences) ? (
        <Typography variant="caption">
          Looks empty here. Add an experience by clicking '+' on the left.
        </Typography>
      ) : (
        experiences.map((item) => (
          <Box id={`${item.company}-exp`} className={classes.exp} key={item.id}>
            <JobTitle
              title={item.jobTitle}
              company={item.company}
              addInfo={item.additionalInfo}
              duration={{
                start: item.start,
                end: item.end,
              }}
              location={item.location}
            />
            <JobDescription desc={item.description} workLink={item.workLink} />
          </Box>
        ))
      )}
    </Box>
  );
}

export default Experience;
