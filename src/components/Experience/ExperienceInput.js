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
  Checkbox,
  Chip,
  FormControlLabel,
  makeStyles,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EXPERIENCE_INFO } from "../../redux/actionTypes";
import { parseDate } from "../../utils/Helpers";
import FloatingAddButton from "../common/FloatingAddButton";
import RemoveButton from "../common/RemoveButton";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "1rem",
    borderColor: theme.palette.contrast.light,
  },
  heading: {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  subtitle: {
    fontSize: "0.8rem",
  },
  desc: {
    minHeight: "5rem",
  },
  tags: {
    marginRight: "0.2rem",
  },
  hints: {
    paddingTop: "0.5rem",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    minWidth: "25rem",
    padding: "1rem",
    margin: "1rem",
    marginLeft: "0rem",
    borderRadius: "1rem",
    backgroundColor: theme.palette.contrast.light,
  },
}));

function ExperienceInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tags = []; //Will be generated from Description Text's Topic Classification
  const [present, setPresent] = useState({ state: false, date: "" });
  const [experience, setExperience] = useState({});
  const [currId, setCurrId] = useState(0);
  const experiences = useSelector((state) => state.experienceInfo);

  const handleAdd = () => {
    setExperience({});
    const len = experiences.length;
    const id = len ? experiences[len - 1].id + 1 : 0;
    dispatch({ type: EXPERIENCE_INFO.ADD, id });
  };

  const handleDelete = (id) => {
    setExperience({});
    dispatch({ type: EXPERIENCE_INFO.DELETE, id });
  };

  const handleChange = (e, id) => {
    setCurrId(id);

    if (e.target.id === "present") {
      setPresent({
        state: !present.state,
        date: parseDate(e.target.type, e.target.value),
      });
      const endValue = present.state ? present.date : "Present";
      setExperience({ end: endValue });
      return;
    }

    e.preventDefault();
    const field = e.target.name;
    const value = parseDate(e.target.type, e.target.value);

    setExperience({ [field]: value });
  };

  React.useEffect(() => {
    setExperience({});
  }, [currId]);

  React.useEffect(() => {
    dispatch({
      type: EXPERIENCE_INFO.UPDATE,
      payload: experience,
      id: currId,
    });
  }, [dispatch, experience, currId]);

  return (
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <Typography color="primary" variant="body1" className={classes.heading}>
        Tell us about your work experience
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
        className={classes.subtitle}
      >
        Don't worry, add anything which you feel relevant for your job
        application
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyItems="space-evenly"
        width="35rem"
        overflow="auto"
      >
        {experiences.map((item) => (
          <Paper elevation={2} className={classes.paper} key={item.id}>
            <TextField
              label="Company/Institution"
              name="company"
              variant="outlined"
              color="secondary"
              className={classes.TextField}
              required
              value={item.company}
              onChange={(e) => handleChange(e, item.id)}
            />
            <TextField
              label="Position/Job Title"
              name="jobTitle"
              variant="outlined"
              color="secondary"
              className={classes.TextField}
              required
              value={item.jobTitle}
              onChange={(e) => handleChange(e, item.id)}
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
              onChange={(e) => handleChange(e, item.id)}
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
                onChange={(e) => handleChange(e, item.id)}
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
                onChange={(e) => handleChange(e, item.id)}
              />
            </Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={item.end === "Present"}
                  onChange={(e) => handleChange(e, item.id)}
                  name="end"
                  color="primary"
                  id="present"
                />
              }
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
              onChange={(e) => handleChange(e, item.id)}
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
              onChange={(e) => handleChange(e, item.id)}
            />
            <Typography
              variant="caption"
              className={classes.hints}
              color="textSecondary"
            >
              Suggested Tags
            </Typography>
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
            <RemoveButton onClick={() => handleDelete(item.id)} />
          </Paper>
        ))}
        <FloatingAddButton onClick={handleAdd} />
      </Box>
    </Box>
  );
}

export default ExperienceInput;
