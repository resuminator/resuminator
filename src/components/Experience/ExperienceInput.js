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
import { DatePicker } from "@material-ui/pickers";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmButton from "../common/ConfirmButton";
import { CustomCheckbox } from "../common/CustomCheckbox";
import ExpandCard from "../common/ExpandCard";
import FloatingAddButton from "../common/FloatingAddButton";
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

const currentDate = () => {
  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
  const currentYear = currentDate.getFullYear();

  return currentMonth + 1 + "-" + currentDayOfMonth + "-" + currentYear; // MM/DD/YYYY
};

const parseLines = (value) =>
  value.replace(/\\'/g, "'").replace(/(\\n)/g, "\n");

function ExperienceInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currIndex, setCurrIndex] = useState(0);
  const storeState = useSelector((state) => state.experienceInfo.experiences);
  const loading = useSelector((state) => state.experienceInfo.loading);
  const [state, setState] = useState(storeState);
  const [open, setOpen] = useState(false);
  const app = useSelector((state) => state.app);
  const [change, setChanged] = useState(false);

  React.useEffect(() => {
    if (!app.init) setState(storeState);
  }, [app, storeState]);

  React.useEffect(() => {
    setState(storeState);
  }, [loading, storeState]);

  const handleAdd = () => {
    dispatch(addExperience("viveknigam3003"));
  };

  const handleDelete = (id) => {
    dispatch(deleteExperience("viveknigam3003", id));
  };

  const handleUpdate = (id, payload) => {
    dispatch(updateExperience("viveknigam3003", id, payload))
  }

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
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyItems="center"
          mt={2}
          key="experience-card-box"
        >
          {state.map((item, index) => (
            <ExpandCard
              key={item._id}
              id={item._id}
              item={item}
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
                <DatePicker
                  variant="inline"
                  openTo="year"
                  name="start"
                  views={["year", "month"]}
                  label="Started"
                  value={item.start}
                  inputVariant="outlined"
                  minDate={new Date("1980-01-01")}
                  maxDate={new Date("2100-01-01")}
                  key={"start"}
                  onChange={handleDateChange("start")}
                  className={classes.TextField}
                />
                <DatePicker
                  variant="inline"
                  openTo="year"
                  name="end"
                  views={["year", "month"]}
                  label="Ended"
                  value={item.end}
                  inputVariant="outlined"
                  minDate={item.start}
                  maxDate={new Date("2100-01-01")}
                  key={"end"}
                  disabled={item.end === currentDate()}
                  onChange={handleDateChange("end")}
                  className={classes.TextField}
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
              <Box
                width="26rem"
                display="flex"
                alignItems="center"
                justifyItems="center"
                justifyContent="space-between"
              >
                <RemoveButton onClick={() => handleDelete(item._id)} />
                <ConfirmButton
                  onClick={() => {
                    handleUpdate(item._id, item);
                    setOpen(false);
                    setChanged(false);
                  }}
                  changed={change}
                />
              </Box>
            </ExpandCard>
          ))}
          <FloatingAddButton onClick={handleAdd} />
        </Box>
      )}
    </Box>
  );
}

export default ExperienceInput;
