/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputHeader } from "../common/InputHeader";
import Loader from "../common/Loader";
import { addUserInfo, updateUserInfo } from "./title.actions";

const useStyles = makeStyles({
  TextField: {
    marginTop: "1rem",
  },
  btn: {
    marginTop: "1rem",
    fontFamily: "Karla",
    textTransform: "none",
    width: "8rem",
  },
});

function TitleInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const storeState = useSelector((state) => state.userInfo);
  const app = useSelector((state) => state.app);
  const [state, setState] = useState(storeState);
  const [payload, setPayload] = useState({});
  const [unsaved, setUnsaved] = useState(false);

  const handleChange = (e) => {
    setUnsaved(true);
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;

    setPayload({ [field]: value });
    setState({ ...state, [field]: value });
  };

  const handleSave = () => {
    setUnsaved(false);
    dispatch(
      updateUserInfo(storeState.username, storeState._id, {
        name: storeState.name,
        jobTitle: storeState.jobTitle,
      })
    );
  };

  React.useEffect(() => {
    if (!app.init) setState(storeState);
  }, [app, storeState]);

  React.useEffect(() => {
    dispatch(addUserInfo(payload));
  }, [dispatch, payload]);

  return (
    <Box display="flex" flexDirection="column" p={2}>
      <InputHeader
        heading="Let's go over some basic info"
        subtitle=" We pulled in some information from your profile, you can edit it below."
      />
      {app.loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            width="26rem"
          >
            <TextField
              label="Full Name"
              type="Name"
              name="name"
              variant="outlined"
              color="secondary"
              value={state.name}
              className={classes.TextField}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              label="Job Title"
              name="jobTitle"
              variant="outlined"
              color="secondary"
              value={state.jobTitle}
              className={classes.TextField}
              onChange={(e) => handleChange(e)}
            />
          </Box>
          {unsaved ? (
            <Button
              color="primary"
              className={classes.btn}
              onClick={handleSave}
            >
              Save Changes
            </Button>
          ) : null}
        </React.Fragment>
      )}
    </Box>
  );
}

export default TitleInput;
