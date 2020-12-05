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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { parseDate } from "../../utils/Helpers";
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
  const [present, setPresent] = useState({ state: false, date: "" });
  const [payload, setPayload] = useState({ field: "", value: "" });
  const [currIndex, setCurrIndex] = useState(0);
  const storeState = useSelector((state) => state.experienceInfo.experiences);
  const [state, setState] = useState(storeState);
  const scrollRef = useHorizontalScroll();
  const app = useSelector((state) => state.app);

  React.useEffect(() => {
    if (!app.init) setState(storeState);
  }, [app, storeState]);

  const handleAdd = () => {
    setPayload({});
    dispatch(addExperience(storeState));
  };

  const handleDelete = (id) => {
    setPayload({});
    dispatch(deleteExperienceById(id));
  };

  const handleChange = (e) => {
    if (e.target.id === "present") {
      setPresent({
        state: !present.state,
        date: parseDate(e.target.type, e.target.value),
      });
      const endValue = present.state ? present.date : "Present";
      setPayload({ f: "end", v: endValue });
      return;
    }

    e.preventDefault();
    const field = e.target.name;
    const value = parseDate(e.target.type, e.target.value);

    setPayload({ field, value });
    //DEBUG: THIS WORKS WELL! DON'T TOUCH!
    setState((prevState) => [
      ...prevState.slice(0, currIndex),
      { ...prevState[currIndex], [field]: value },
      ...prevState.slice(currIndex + 1),
    ]);
  };

  // React.useEffect(() => {
  //   setPayload({ field: "", value: "" });
  // }, [currIndex]);

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  React.useEffect(() => {
    dispatch(updateExperienceById(currIndex, payload));
  }, [dispatch, payload, currIndex]);

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
              setPayload({ field: "", value: "" });
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
              <TextField
                type="date"
                name="start"
                color="secondary"
                className={classes.TextField}
                label="Started"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
              />
              <TextField
                type="date"
                name="end"
                color="secondary"
                className={classes.TextField}
                label="Ended"
                variant="outlined"
                disabled={item.end === "Present"}
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
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
