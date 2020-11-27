/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PROJECT_INFO } from "../../redux/actionTypes";
import FloatingAddButton from "../common/FloatingAddButton";
import { InputCard } from "../common/InputCard";
import { InputHeader } from "../common/InputHeader";
import RemoveButton from "../common/RemoveButton";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "1rem",
  },
  desc: {
    minHeight: "3rem",
  },
  tags: {
    marginRight: "0.2rem",
  },
}));

function ProjectInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projectInfo);
  const [project, setProject] = useState({ description: `` });
  const [currId, setCurrId] = useState(0);

  const handleAdd = () => {
    setProject({});
    const len = projects.length;
    const id = len ? projects[len - 1].id + 1 : 0;
    dispatch({ type: PROJECT_INFO.ADD, id });
  };

  const handleDelete = (id) => {
    setProject({});
    dispatch({ type: PROJECT_INFO.DELETE, id });
  };

  const handleChange = (e, id) => {
    setCurrId(id);

    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;

    setProject({ [field]: value });
  };

  React.useEffect(() => setProject({}), [currId]);

  React.useEffect(() => {
    dispatch({
      type: PROJECT_INFO.UPDATE,
      payload: project,
      id: currId,
    });
  }, [dispatch, project, currId]);

  return (
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <InputHeader
        heading=" Showcase your best work!"
        subtitle="Add details about your top 2/3 projects which align with your job
        profile!"
      />
      <Box
        display="flex"
        alignItems="center"
        justifyItems="space-evenly"
        width="35rem"
        overflow="auto"
      >
        {projects.map((item) => (
          <InputCard key={item.id}>
            <TextField
              label="Project Name"
              name="projectTitle"
              variant="outlined"
              color="secondary"
              className={classes.TextField}
              required
              value={item.projectTitle}
              onChange={(e) => handleChange(e, item.id)}
            />
            <TextField
              InputProps={{ classes: { input: classes.desc }, rowsMax: 2 }}
              variant="outlined"
              color="secondary"
              label="What it is about?"
              name="description"
              placeholder="Write a short description about your role in the project"
              multiline
              value={item.description}
              className={classes.TextField}
              onChange={(e) => handleChange(e, item.id)}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Where to find it?"
              name="projectLink"
              type="link"
              color="secondary"
              value={item.link}
              placeholder="Github/Website/Blog link"
              className={classes.TextField}
              onChange={(e) => handleChange(e, item.id)}
            />
            <RemoveButton onClick={() => handleDelete(item.id)} />
          </InputCard>
        ))}
        <FloatingAddButton onClick={handleAdd} />
      </Box>
    </Box>
  );
}

export default ProjectInput;
