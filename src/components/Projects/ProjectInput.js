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
import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../Auth/AuthContext";
import CardControls from "../common/CardControls";
import ConfirmButton from "../common/ConfirmButton";
import ExpandCard from "../common/ExpandCard";
import FloatingAddButton from "../common/FloatingAddButton";
import InputCardContent from "../common/InputCardContent";
import { InputHeader } from "../common/InputHeader";
import Loader from "../common/Loader";
import RemoveButton from "../common/RemoveButton";
import {
  addProject,
  deleteProject,
  updateProject,
  updateProjectState,
} from "./project.actions";

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
  const app = useSelector((state) => state.app);
  const token = useContext(AuthContext).token;
  const storeState = useSelector((state) => state.projectInfo.projects);
  const loading = useSelector((state) => state.projectInfo.loading);
  const [state, setState] = useState(storeState);
  const [currIndex, setCurrIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [change, setChanged] = useState(false);

  React.useEffect(() => {
    if (!app.init) {
      setState(storeState);
    }
  }, [app, storeState]);

  React.useEffect(() => {
    setState(storeState);
  }, [loading, storeState]);

  const handleAdd = () => {
    dispatch(addProject(token));
  };

  const handleDelete = (id) => {
    setCurrIndex(-1);
    setOpen(false);
    dispatch(deleteProject(token, id));
  };

  const handleUpdate = (id, payload) => {
    dispatch(updateProject(token, id, payload));
  };

  const handleChange = (e) => {
    setChanged(true);
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;

    setState((prevState) => [
      ...prevState.slice(0, currIndex),
      { ...prevState[currIndex], [field]: value },
      ...prevState.slice(currIndex + 1),
    ]);
  };

  const handleTagsInput = (e) => {
    setChanged(true);
    const value = e.target.value;
    const newTags = value !== "" ? value.split(",") : [];

    setState((prevState) => [
      ...prevState.slice(0, currIndex),
      {
        ...prevState[currIndex],
        tags: newTags,
      },
      ...prevState.slice(currIndex + 1),
    ]);
  };

  React.useEffect(() => {
    dispatch(updateProjectState(state));
  }, [dispatch, state]);

  return (
    <Box display="flex" alignItems="start" flexDirection="column" mt={1} p={2}>
      <InputHeader
        heading=" Showcase your best work!"
        subtitle="Add details about your top 2/3 projects which align with your job
        profile!"
      />
      {app.loading ? (
        <Loader />
      ) : (
        <InputCardContent label="project-card-box">
          {state.map((item, index) => (
            <ExpandCard
              key={item._id}
              id={item._id}
              displayProps={{
                title: item.projectTitle,
                subtitle: item.projectLink,
                titleAlt: "Click to add projects info",
                subtitleAlt: "Add project link",
              }}
              open={open}
              currIndex={currIndex}
              index={index}
              expand={() => {
                setCurrIndex(index);
                setOpen(true);
              }}
              collapse={() => setOpen(false)}
            >
              <TextField
                label="Project Name"
                name="projectTitle"
                variant="outlined"
                color="secondary"
                className={classes.TextField}
                required
                value={item.projectTitle}
                onChange={handleChange}
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
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                size="small"
                label="Where to find it?"
                name="projectLink"
                type="link"
                color="secondary"
                value={item.projectLink}
                placeholder="Github/Website/Blog link"
                className={classes.TextField}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                color="secondary"
                label="Tags"
                name="tags"
                placeholder="Separate tags by commas"
                required
                value={item.tags.toString()}
                className={classes.TextField}
                onChange={handleTagsInput}
              />
              <CardControls>
                <RemoveButton onClick={() => handleDelete(item._id)} />
                <ConfirmButton
                  onClick={() => {
                    handleUpdate(item._id, item);
                    setOpen(false);
                    setChanged(false);
                  }}
                  changed={change}
                />
              </CardControls>
            </ExpandCard>
          ))}
          <FloatingAddButton onClick={handleAdd} />
        </InputCardContent>
      )}
    </Box>
  );
}

export default ProjectInput;
