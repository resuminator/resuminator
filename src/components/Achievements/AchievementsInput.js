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
import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../Auth/AuthContext";
import { InputHeader } from "../common/InputHeader";
import Loader from "../common/Loader";
import {
  updateAchievement,
  updateAchievementState
} from "./achievements.actions";

const useStyles = makeStyles({
  TextField: {
    marginTop: "1rem",
    width: "26rem",
  },
  desc: {
    minHeight: "5rem",
    whiteSpace: "preLine",
  },
  btn: {
    marginTop: "1rem",
    fontFamily: "Karla",
    textTransform: "none",
    width: "8rem",
  },
});

function AchievementsInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const storeState = useSelector((state) => state.achievementInfo);
  const token = useContext(AuthContext).token;
  const app = useSelector((state) => state.app);
  const [state, setState] = useState(storeState);
  const [unsaved, setUnsaved] = useState(false);

  React.useEffect(() => {
    if (!app.init) setState(storeState);
  }, [app, storeState]);

  const handleChange = (e) => {
    setUnsaved(true);
    e.preventDefault();
    const value = e.target.value;

    setState({ ...state, description: value });
  };

  const handleSave = (e) => {
    setUnsaved(false);
    dispatch(
      updateAchievement(token, { description: state.description })
    );
  };

  React.useEffect(() => {
    dispatch(updateAchievementState(state.description));
  }, [dispatch, state.description]);

  return (
    <Box display="flex" flexDirection="column" p={2}>
      <InputHeader
        heading="Showcase your achievements"
        subtitle="Write down your achievments and style them however you like with markdown."
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
              InputProps={{ classes: { input: classes.desc }, rowsMax: 6 }}
              variant="outlined"
              color="secondary"
              label="Achievements"
              name="achievements"
              placeholder="Add relevant achievements. Use `*` before sentences to create bullet points."
              multiline
              type="text"
              value={state.description}
              className={classes.TextField}
              onChange={handleChange}
            />
          </Box>
          {unsaved ? (
            <Button
              color="primary"
              className={classes.btn}
              onClick={handleSave}
              variant="contained"
            >
              Save Changes
            </Button>
          ) : null}
        </React.Fragment>
      )}
    </Box>
  );
}

export default AchievementsInput;
