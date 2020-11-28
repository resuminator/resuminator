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
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { parseYear } from "../../utils/Helpers";
import { CustomCheckbox } from "../common/CustomCheckbox";
import FloatingAddButton from "../common/FloatingAddButton";
import { InputCard } from "../common/InputCard";
import { InputHeader } from "../common/InputHeader";
import RemoveButton from "../common/RemoveButton";
import {
  addEducation,
  deleteEducationById,
  updateEducationById,
} from "./educationActions";

const useStyles = makeStyles({
  TextField: {
    marginTop: "1rem",
  },
  desc: {
    minHeight: "2rem",
  },
  grade: {
    marginTop: "1rem",
    marginRight: "0.5rem",
  },
});

function EducationInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [present, setPresent] = useState({ state: false, date: "" });
  const [education, setEducation] = useState({ description: `` });
  const allEducation = useSelector((state) => state.educationInfo);
  const [currId, setCurrId] = useState(0);
  const scrollRef = useHorizontalScroll();

  const handleAdd = () => {
    setEducation({});
    dispatch(addEducation(allEducation));
  };

  const handleDelete = (id) => {
    setEducation({});
    dispatch(deleteEducationById(id));
  };

  const handleChange = (e, id) => {
    setCurrId(id);

    if (e.target.id === "present") {
      setPresent({
        state: !present.state,
        date: parseYear(e.target.type, e.target.value),
      });
      const endValue = present.state ? present.date : "Present";
      setEducation({ end: endValue });
      return;
    }

    e.preventDefault();
    const field = e.target.name;
    const value = parseYear(e.target.type, e.target.value);

    setEducation({ [field]: value });
  };

  React.useEffect(() => setEducation({}), [currId]);

  React.useEffect(() => {
    dispatch(updateEducationById(currId, education));
  }, [dispatch, education, currId]);

  return (
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <InputHeader
        heading="Where did you get your recent degree from?"
        subtitle="Add your college/school details along with any other information about
        it."
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
        {allEducation.map((item) => (
          <InputCard key={item.id}>
            <TextField
              label="College/School"
              variant="outlined"
              name="institute"
              color="secondary"
              className={classes.TextField}
              required
              value={item.institute}
              onChange={(e) => handleChange(e, item.id)}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Location"
              name="location"
              color="secondary"
              placeholder="City, State"
              value={item.location}
              className={classes.TextField}
              onChange={(e) => handleChange(e, item.id)}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Degree"
              name="degree"
              color="secondary"
              placeholder="Degree/High School/10th/12th etc."
              value={item.degree}
              className={classes.TextField}
              onChange={(e) => handleChange(e, item.id)}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Majors/Stream"
              name="stream"
              color="secondary"
              placeholder="Majors for your degree, if any?"
              value={item.stream}
              className={classes.TextField}
              onChange={(e) => handleChange(e, item.id)}
            />
            <Box display="flex" alignItems="center">
              <TextField
                variant="outlined"
                size="small"
                label="Grade"
                name="grade"
                color="secondary"
                placeholder="Your CGPA"
                value={item.grade}
                className={classes.grade}
                onChange={(e) => handleChange(e, item.id)}
              />
              <TextField
                variant="outlined"
                size="small"
                label="Max Grade"
                name="total"
                color="secondary"
                value={item.total}
                className={classes.grade}
                onChange={(e) => handleChange(e, item.id)}
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
                onChange={(e) => handleChange(e, item.id)}
              />
              <TextField
                type="date"
                color="secondary"
                className={classes.TextField}
                label="Graduated"
                name="end"
                variant="outlined"
                disabled={item.end === "Present"}
                InputLabelProps={{ shrink: true }}
                onChange={(e) => handleChange(e, item.id)}
              />
            </Box>
            <CustomCheckbox
              checked={item.end === "Present"}
              onChange={(e) => handleChange(e, item.id)}
              name="end"
              color="primary"
              id="present"
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
              value={item.description}
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

export default EducationInput;
