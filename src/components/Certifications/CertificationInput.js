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
  addCertification,
  deleteCertification,
  updateCertification,
  updateCertificationState,
} from "./certification.actions";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "1rem",
  },
  desc: {
    minHeight: "2rem",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function CertificationInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const username = useSelector((state) => state.userInfo.username);
  const storeState = useSelector(
    (state) => state.certificationInfo.certifications
  );
  const loading = useSelector((state) => state.certificationInfo.loading);
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
    dispatch(addCertification(username));
  };

  const handleDelete = (id) => {
    setCurrIndex(-1);
    setOpen(false);
    dispatch(deleteCertification(username, id));
  };

  const handleUpdate = (id, payload) => {
    dispatch(updateCertification(username, id, payload));
  };

  const handleCheckbox = (resetDate) => {
    setState((prevState) => [
      ...prevState.slice(0, currIndex),
      {
        ...prevState[currIndex],
        expires:
          prevState[currIndex].expires === currentDate()
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
    dispatch(updateCertificationState(state));
  }, [dispatch, state]);

  return (
    <Box display="flex" alignItems="start" flexDirection="column" mt={1} p={2}>
      <InputHeader
        heading="Got any certifications?"
        subtitle="Add your professional certifications with certification ID and/or Link"
      />
      {app.loading ? (
        <Loader />
      ) : (
        <InputCardContent>
          {state.map((item, index) => (
            <ExpandCard
              key={item._id}
              id={item._id}
              displayProps={{
                title: item.name,
                subtitle: item.number,
                titleAlt: "Click to add certificates",
                subtitleAlt: "Add certificate number",
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
                label="Name"
                name="name"
                variant="outlined"
                color="secondary"
                className={classes.TextField}
                value={item.name}
                required
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                size="small"
                label="Issuing Authority"
                name="authority"
                color="secondary"
                placeholder="company name"
                value={item.authority}
                className={classes.TextField}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                size="small"
                label="Unique Certification ID"
                name="number"
                color="secondary"
                value={item.number}
                className={classes.TextField}
                onChange={handleChange}
              />
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <CustomDatePicker
                  label="Obtained"
                  name="obtained"
                  views={["year", "month"]}
                  onChange={handleDateChange("obtained")}
                  disabled={item.expires === currentDate()}
                  className={classes.TextField}
                  value={item.start}
                />
                <CustomDatePicker
                  label="Expires"
                  name="expires"
                  value={item.expires}
                  views={["year", "month"]}
                  disabled={item.expires === currentDate()}
                  onChange={handleDateChange("expires")}
                  className={classes.TextField}
                />
              </Box>
              <CustomCheckbox
                checked={item.expires === currentDate()}
                onChange={() => handleCheckbox(item.obtained)} //TODO: Fix this, it might break.
                name="expires"
                color="primary"
                label="Never Expires"
              />
              <TextField
                variant="outlined"
                size="small"
                label="Link"
                name="link"
                color="secondary"
                value={item.link}
                className={classes.TextField}
                onChange={(e) => handleChange(e, item.id)}
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

export default CertificationInput;
