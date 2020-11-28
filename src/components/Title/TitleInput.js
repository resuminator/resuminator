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
import { useDispatch } from "react-redux";
import { USERINFO } from "../../redux/actionTypes";
import { InputHeader } from "../common/InputHeader";

const useStyles = makeStyles({
  TextField: {
    marginTop: "1rem",
  },
});

function TitleInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({ name: "", jobtitle: "" });

  const handleChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;

    setUserInfo({ ...userInfo, [field]: value });
  };

  React.useEffect(() => {
    dispatch({ type: USERINFO.ADD, payload: userInfo });
  }, [dispatch, userInfo]);

  return (
    <Box display="flex" flexDirection="column" p={2}>
      <InputHeader
        heading="Let's go over some basic info"
        subtitle=" We pulled in some information from your profile, you can edit it below."
      />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        width="75%"
      >
        <TextField
          label="Full Name"
          type="Name"
          name="name"
          variant="outlined"
          color="secondary"
          className={classes.TextField}
          onChange={handleChange}
        />
        <TextField
          label="Job Title"
          name="jobtitle"
          variant="outlined"
          color="secondary"
          className={classes.TextField}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}

export default TitleInput;
