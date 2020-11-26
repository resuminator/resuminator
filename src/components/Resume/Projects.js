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
import ColoredLine from "../utils/Line";
import ProjectTitle from "./Projects/ProjectTitle";
import ProjectDescription from "./Projects/ProjectDescription";
import { useSelector } from "react-redux";
import { checkEmptyState } from "../utils/Helpers";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.5rem",
  },
}));

function Projects() {
  const classes = useStyles();
  const projects = useSelector((state) => state.projectInfo);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyItems="flex-start"
      pb={2}
    >
      <Typography
        variant="h1"
        id="title"
        color="primary"
        className={classes.title}
      >
        Projects
      </Typography>
      <ColoredLine color="#44318D" opacity="0.5" />
      {checkEmptyState(projects) ? (
        <Typography variant="caption">
          Looks empty here. Add some project info by clicking '+' on the left.
        </Typography>
      ) : (
        projects.map((item) => (
          <Box key={item.id}>
            <ProjectTitle
              title={item.projectTitle}
              company={item.company}
              addInfo={item.additionalInfo}
              projectLink={item.projectLink}
            />
            <ProjectDescription desc={item.description} />
          </Box>
        ))
      )}
    </Box>
  );
}

export default Projects;
