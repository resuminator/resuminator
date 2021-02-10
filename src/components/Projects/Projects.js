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
import { TagChips } from "../common/TagChips";
import ProjectDescription from "./ProjectDescription";
import ProjectTitle from "./ProjectTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    wordBreak: "break-word",
    width: "100%"
  },
  title: {
    fontSize: "1.5rem",
  },
  tags: {
    marginRight: "0.3rem",
    minWidth: "2.5rem",
    marginBottom: "0.5rem",
    wordBreak: "break-word",
    maxWidth: "10rem"
  },
}));

function Projects() {
  const classes = useStyles();
  const projects = useSelector((state) => state.projectInfo.projects);

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
      <ColoredLine opacity={0.5} />
      {checkEmptyState(projects) ? (
        <Typography variant="caption">
          Looks empty here. Add some project info by clicking '+' on the left.
        </Typography>
      ) : (
        projects.map((item) => (
          <Box key={item._id} className={classes.root}>
            <ProjectTitle title={item.projectTitle} link={item.projectLink} />
            <ProjectDescription desc={item.description} />
            {item.tags.length ? (
              <TagChips tags={item.tags} className={classes.tags} />
            ) : null}
          </Box>
        ))
      )}
    </Box>
  );
}

export default Projects;
