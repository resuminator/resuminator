/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles, TextField, Typography } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { CustomCheckbox } from "../common/CustomCheckbox";
import FloatingAddButton from "../common/FloatingAddButton";
import { InputCard } from "../common/InputCard";
import { InputHeader } from "../common/InputHeader";
import RemoveButton from "../common/RemoveButton";
import { TagChips } from "../common/TagChips";
import {
  addExperience,
  deleteExperienceById,
  updateExperienceById,
} from "./experience.actions";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "1rem",
    borderColor: theme.palette.contrast.light,
  },
  desc: {
    minHeight: "5rem",
  },
  hints: {
    paddingTop: "0.5rem",
  },
}));

function ExperienceInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tags = []; //Will be generated from Description Text's Topic Classification
  // const [payload, setPayload] = useState({ field: "", value: "" });
  const [currIndex, setCurrIndex] = useState(0);
  const storeState = useSelector((state) => state.experienceInfo.experiences);
  const [state, setState] = useState(storeState);
  const scrollRef = useHorizontalScroll();
  const app = useSelector((state) => state.app);

  React.useEffect(() => {
    if (!app.init) setState(storeState);
  }, [app, storeState]);

  const handleAdd = () => {
    dispatch(addExperience(storeState));
  };

  const handleDelete = (id) => {
    dispatch(deleteExperienceById(id));
  };

  const handleDateChange = (key) => (date) => {
    console.log(key, date);
    const field = key;
    const value = date.toString();

    /// setPayload({ field, value });
    setState((prevState) => [
      ...prevState.slice(0, currIndex),
      { ...prevState[currIndex], [field]: value },
      ...prevState.slice(currIndex + 1),
    ]);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    // setPayload({ field, value });

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
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <InputHeader
        heading="Tell us about your work experience"
        subtitle="Don't worry, add anything which you feel relevant for your job
        application"
      />
      <Box
        display="flex"
        alignItems="center"
        justifyItems="space-evenly"
        width="35rem"
        height="100%"
        overflow="auto"
        ref={scrollRef}
      >
        {state.map((item, index) => (
          <InputCard
            key={item._id}
            id={item._id}
            onClick={() => {
              setCurrIndex(index);
              // setPayload({ field: "", value: "" });
            }}
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
                minDate={new Date("1980-01-01")}
                maxDate={new Date("2100-01-01")}
                key={"end"}
                onChange={handleDateChange("end")}
                className={classes.TextField}
              />
            </Box>
            <CustomCheckbox
              checked={item.end === "Present"}
              onChange={handleChange}
              name="end"
              color="primary"
              id="present"
              label="Present"
            />
            <TextField
              InputProps={{ classes: { input: classes.desc }, rowsMax: 5 }}
              variant="outlined"
              color="secondary"
              label="Description"
              name="description"
              placeholder="* Start writing in bullet points..."
              multiline
              required
              value={item.description}
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
            <Typography
              variant="caption"
              className={classes.hints}
              color="textSecondary"
            >
              Suggested Tags
            </Typography>
            <TagChips tags={tags} />
            <RemoveButton onClick={() => handleDelete(item._id)} />
          </InputCard>
        ))}
        <FloatingAddButton onClick={handleAdd} />
      </Box>
    </Box>
  );
}

export default ExperienceInput;
