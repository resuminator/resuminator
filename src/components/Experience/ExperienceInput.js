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
import { currentDate, parseLines } from "../../utils/Helpers";
import { AuthContext } from "../Auth/AuthContext";
import CardControls from "../common/CardControls";
import ConfirmButton from "../common/ConfirmButton";
import { CustomCheckbox } from "../common/CustomCheckbox";
import CustomDatePicker from "../common/CustomDatePicker";
import ExpandCard from "../common/ExpandCard";
import FloatingAddButton from "../common/FloatingAddButton";
import InputCardContent from "../common/InputCardContent";
import { InputHeader } from "../common/InputHeader";
import Loader from "../common/Loader";
import RemoveButton from "../common/RemoveButton";
import {
  addExperience,
  deleteExperience,
  updateExperience,
  updateExperienceById,
} from "./experience.actions";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "1rem",
    borderColor: theme.palette.contrast.light,
  },
  desc: {
    minHeight: "5rem",
    whiteSpace: "preLine",
  },
  hints: {
    paddingTop: "0.5rem",
  },
}));

function ExperienceInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const uid = useContext(AuthContext).uid;
  const storeState = useSelector((state) => state.experienceInfo.experiences);
  const loading = useSelector((state) => state.experienceInfo.loading);
  const [currIndex, setCurrIndex] = useState(0);
  const [state, setState] = useState(storeState);
  const [open, setOpen] = useState(false);
  const [change, setChanged] = useState(false);

  React.useEffect(() => {
    if (!app.init) setState(storeState);
  }, [app, storeState]);

  React.useEffect(() => {
    setState(storeState);
  }, [loading, storeState]);

  const handleAdd = () => {
    dispatch(addExperience(uid));
  };

  const handleDelete = (id) => {
    setCurrIndex(-1);
    setOpen(false);
    dispatch(deleteExperience(uid, id));
  };

  const handleUpdate = (id, payload) => {
    dispatch(updateExperience(uid, id, payload));
  };

  const handleCheckbox = (resetDate) => {
    setState((prevState) => [
      ...prevState.slice(0, currIndex),
      {
        ...prevState[currIndex],
        end:
          prevState[currIndex].end === currentDate()
            ? resetDate
            : currentDate(),
      },
      ...prevState.slice(currIndex + 1),
    ]);
  };

  const handleDateChange = (key) => (date) => {
    setChanged(true);
    const field = key;
    const value = date.toString();

    setState((prevState) => [
      ...prevState.slice(0, currIndex),
      { ...prevState[currIndex], [field]: value },
      ...prevState.slice(currIndex + 1),
    ]);
  };

  const handleChange = (e) => {
    setChanged(true);
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    //DEBUG: THIS WORKS WELL! DON'T TOUCH!
    setState((prevState) => [
      ...prevState.slice(0, currIndex),
      { ...prevState[currIndex], [field]: value },
      ...prevState.slice(currIndex + 1),
    ]);
  };

  React.useEffect(() => {
    dispatch(updateExperienceById(state));
  }, [dispatch, state]);

  return (
    <Box display="flex" alignItems="start" flexDirection="column" mt={1} p={2}>
      <InputHeader
        heading="Tell us about your work experience"
        subtitle="Don't worry, add anything which you feel relevant for your job
        application"
      />
      {app.loading ? (
        <Loader />
      ) : (
        <InputCardContent label="experience-card-box">
          {state.map((item, index) => (
            <ExpandCard
              key={item._id}
              id={item._id}
              displayProps={{
                title: item.company,
                subtitle: item.jobTitle,
                titleAlt: "Click to add experience info.",
                subtitleAlt: "Add job title.",
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
                label="Company/Institution"
                name="company"
                variant="outlined"
                color="secondary"
                className={classes.TextField}
                required
                value={item.company}
                onChange={handleChange}
              />
              <TextField
                label="Position/Job Title"
                name="jobTitle"
                variant="outlined"
                color="secondary"
                className={classes.TextField}
                required
                value={item.jobTitle}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                size="small"
                label="Location"
                name="location"
                color="secondary"
                value={item.location}
                placeholder="City name or 'Remote'"
                className={classes.TextField}
                onChange={handleChange}
              />
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <CustomDatePicker
                  label="Started"
                  name="start"
                  views={["year", "month"]}
                  onChange={handleDateChange("start")}
                  className={classes.TextField}
                  value={item.start}
                />
                <CustomDatePicker
                  label="End"
                  name="end"
                  value={item.end}
                  views={["year", "month"]}
                  onChange={handleDateChange("end")}
                  className={classes.TextField}
                  disabled={item.end === currentDate()}
                />
              </Box>
              <CustomCheckbox
                checked={item.end === currentDate()}
                onChange={() => handleCheckbox(item.start)}
                name="end"
                color="primary"
                label="Present"
              />
              <TextField
                InputProps={{ classes: { input: classes.desc } }}
                variant="outlined"
                color="secondary"
                label="Description"
                name="description"
                placeholder="* Start writing in bullet points..."
                multiline
                required
                type="text"
                value={parseLines(item.description)}
                className={classes.TextField}
                helperText="Markdown is supported :)"
                onChange={handleChange}
              />
              <TextField
                type="link"
                label="Work link"
                name="workLink"
                variant="outlined"
                color="secondary"
                size="small"
                value={item.workLink}
                placeholder="Copy/Paste work link here"
                className={classes.TextField}
                onChange={handleChange}
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

export default ExperienceInput;
