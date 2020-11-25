/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import {
  Box,
  Chip,
  Fab,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { FiPlus } from "react-icons/fi";
const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "1rem",
  },
  heading: {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  subtitle: {
    fontSize: "0.8rem",
  },
  desc: {
    minHeight: "3rem",
  },
  tags: {
    marginRight: "0.2rem",
  },
  paper: {
    display: "flex",
    minWidth: "25rem",
    flexDirection: "column",
    padding: "1rem",
    margin: "1rem",
    marginLeft: "0rem",
    borderRadius: "1rem",
    backgroundColor: theme.palette.contrast.light,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function ProjectInfo() {
  const classes = useStyles();
  const tags = [];

  return (
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <Typography color="primary" variant="body1" className={classes.heading}>
        Showcase your best work!
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
        className={classes.subtitle}
      >
        Add details about your top 2/3 projects which align with your job
        profile!
      </Typography>
      <Box display="flex" alignItems="center" justifyItems="space-evenly">
        <Paper elevation={2} className={classes.paper}>
          <TextField
            label="Project Name"
            variant="outlined"
            color="secondary"
            className={classes.TextField}
            required
          />
          <TextField
            InputProps={{ classes: { input: classes.desc }, rowsMax: 2 }}
            variant="outlined"
            color="secondary"
            label="What it is about?"
            placeholder="Write a short description about your role in the project"
            multiline
            className={classes.TextField}
          />
          <TextField
            variant="outlined"
            size="small"
            label="Where to find it?"
            type="link"
            color="secondary"
            placeholder="Github/Website/Blog link"
            className={classes.TextField}
          />
          <Box display="flex" justifyItems="space-between" pt={1}>
            {tags.map((item) => (
              <Chip
                key={item}
                variant="default"
                color="secondary"
                label={item}
                size="small"
                className={classes.tags}
              />
            ))}
          </Box>
        </Paper>
        <Fab
          size="small"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          <FiPlus />
        </Fab>
      </Box>
    </Box>
  );
}

export default ProjectInfo;
