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
import { currentDate } from "../../utils/Helpers";
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
  addEducation,
  deleteEducation,
  updateEducation,
  updateEducationState,
} from "./education.actions";

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
  const app = useSelector((state) => state.app);
  const username = useSelector((state) => state.userInfo.username);
  const storeState = useSelector((state) => state.educationInfo.education);
  const loading = useSelector((state) => state.educationInfo.loading);
  const [state, setState] = useState(storeState);
  const [currIndex, setCurrIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [change, setChanged] = useState(false);

  React.useEffect(() => {
    if (!app.init) setState(storeState);
  }, [app, storeState]);

  React.useEffect(() => {
    setState(storeState);
  }, [loading, storeState]);

  const handleAdd = () => {
    dispatch(addEducation(username));
  };

  const handleDelete = (id) => {
    setCurrIndex(-1);
    setOpen(false);
    dispatch(deleteEducation(username, id));
  };

  const handleUpdate = (id, payload) => {
    dispatch(updateEducation(username, id, payload));
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

    setState((prevState) => [
      ...prevState.slice(0, currIndex),
      { ...prevState[currIndex], [field]: value },
      ...prevState.slice(currIndex + 1),
    ]);
  };

  React.useEffect(() => {
    dispatch(updateEducationState(state));
  }, [dispatch, state]);

  return (
    <Box display="flex" alignItems="start" flexDirection="column" mt={1} p={2}>
      <InputHeader
        heading="Where did you get your recent degree from?"
        subtitle="Add your college/school details along with any other information about
        it."
      />
      {app.loading ? (
        <Loader />
      ) : (
        <InputCardContent label="education-card-box">
          {state.map((item, index) => (
            <ExpandCard
              key={item._id}
              id={item._id}
              displayProps={{
                title: item.institute,
                subtitle: item.stream,
                titleAlt: "Click to add education info",
                subtitleAlt: "Add degree & majors"
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
                label="College/School"
                variant="outlined"
                name="institute"
                color="secondary"
                className={classes.TextField}
                required
                value={item.institute}
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  size="small"
                  label="Max Grade"
                  name="total"
                  color="secondary"
                  value={item.total}
                  className={classes.grade}
                  onChange={handleChange}
                />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <CustomDatePicker
                  label="Started"
                  name="start"
                  views={["year"]}
                  onChange={handleDateChange("start")}
                  className={classes.TextField}
                  value={item.start}
                />
                <CustomDatePicker
                  label="Graduated"
                  name="end"
                  value={item.end}
                  views={["year"]}
                  onChange={handleDateChange("end")}
                  disabled={item.end === currentDate()}
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
                InputProps={{ classes: { input: classes.desc }, rowsMax: 2 }}
                variant="outlined"
                color="secondary"
                label="Activities & Societies"
                name="description"
                placeholder="Add relevant club names or positions of responsibility separated by commas..."
                multiline
                type="text"
                value={item.description}
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

export default EducationInput;
