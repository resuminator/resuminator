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
  Fab,
  FormControlLabel,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { EDUCATION_INFO } from "../../../../redux/actionTypes";
import FloatingAddButton from "../../../FloatingAddButton";
import { parseYear } from "../../../utils/Helpers";

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
    minHeight: "2rem",
  },
  grade: {
    marginTop: "1rem",
    marginRight: "0.5rem",
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
}));

function EducationInfo() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [present, setPresent] = useState({ state: false, date: "" });
  const [education, setEducation] = useState({ description: `` });
  const allEducation = useSelector((state) => state.educationInfo);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAdd = () => {
    const id = allEducation[allEducation.length - 1].id + 1;
    dispatch({ type: EDUCATION_INFO.ADD, id });
  };

  const handleChange = (e, index) => {
    if (e.target.id === "present") {
      setPresent({ state: !present.state, date: education.end });
      const endValue = present.state ? present.date : "Present";
      setEducation({ ...education, end: endValue });
      return;
    }

    e.preventDefault();
    const field = e.target.name;
    const value = parseYear(e.target.type, e.target.value);

    setEducation({ ...education, [field]: value });
    setCurrentIndex(index);
  };

  React.useEffect(() => {
    dispatch({
      type: EDUCATION_INFO.UPDATE,
      payload: education,
      index: currentIndex,
    });
  }, [dispatch, education, currentIndex]);

  return (
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <Typography color="primary" variant="body1" className={classes.heading}>
        Where did you get your recent degree from?
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
        className={classes.subtitle}
      >
        Add your college/school details along with any other information about
        it.
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyItems="space-evenly"
        width="35rem"
        overflow="auto"
      >
        {allEducation.map((item, index) => (
          <Paper elevation={2} className={classes.paper} key={item.id}>
            <TextField
              label="College/School"
              variant="outlined"
              name="institute"
              color="secondary"
              className={classes.TextField}
              required
              onChange={(e) => handleChange(e, index)}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Location"
              name="location"
              color="secondary"
              placeholder="City, State"
              className={classes.TextField}
              onChange={(e) => handleChange(e, index)}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Degree"
              name="degree"
              color="secondary"
              placeholder="Degree/High School/10th/12th etc."
              className={classes.TextField}
              onChange={(e) => handleChange(e, index)}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Majors/Stream"
              name="stream"
              color="secondary"
              placeholder="Majors for your degree, if any?"
              className={classes.TextField}
              onChange={(e) => handleChange(e, index)}
            />
            <Box display="flex" alignItems="center">
              <TextField
                variant="outlined"
                size="small"
                label="Grade"
                name="grade"
                color="secondary"
                placeholder="Your CGPA"
                className={classes.grade}
                onChange={(e) => handleChange(e, index)}
              />
              <TextField
                variant="outlined"
                size="small"
                label="Max Grade"
                name="total"
                color="secondary"
                className={classes.grade}
                onChange={(e) => handleChange(e, index)}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <TextField
                type="date"
                color="secondary"
                className={classes.TextField}
                label="Started"
                name="start"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => handleChange(e, index)}
              />
              <TextField
                type="date"
                color="secondary"
                className={classes.TextField}
                label="Graduated"
                name="end"
                variant="outlined"
                disabled={present.state}
                InputLabelProps={{ shrink: true }}
                onChange={(e) => handleChange(e, index)}
              />
            </Box>
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Checkbox
                  checked={present.state}
                  onChange={(e) => handleChange(e, index)}
                  name="end"
                  color="primary"
                  id="present"
                />
              }
              label="Currently Studying"
            />
            <TextField
              InputProps={{ classes: { input: classes.desc }, rowsMax: 2 }}
              variant="outlined"
              color="secondary"
              label="Activities & Societies"
              name="description"
              placeholder="Add relevant club names or positions of responsibility separated by commas..."
              multiline
              className={classes.TextField}
              onChange={(e) => handleChange(e, index)}
            />
          </Paper>
        ))}
        <FloatingAddButton onClick={handleAdd} />
      </Box>
    </Box>
  );
}

export default EducationInfo;
