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
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import ServerCheck from "../../App/ServerCheck";
import firebaseSDK from "../../Services/firebaseSDK";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Karla",
    fontWeight: 700,
    letterSpacing: "-0.2rem",
    fontSize: "3rem",
    color: theme.palette.primary.dark,
  },
  notice: {
    fontFamily: "Karla",
    width: "20rem",
    marginTop: "2rem",
    textAlign: "justify",
    fontSize: "0.9rem",
    color: theme.palette.grey[800],
  },
  TextField: {
    marginTop: "1rem",
    width: "20rem",
  },
  greeting: {
    fontSize: "1.2rem",
    fontFamily: "Karla",
    letterSpacing: "-0.08rem",
    color: theme.palette.grey[900],
    padding: "1rem",
    paddingBottom: "2rem",
  },
  btn: {
    marginTop: "2rem",
    marginRight: "1rem",
    textTransform: "none",
    fontFamily: "Karla",
  },
  error: {
    marginTop: "1rem",
    color: theme.palette.secondary.dark
  },
}));

const PasswordReset = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setMessage("");
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return setMessage("Please enter your email!");

    firebaseSDK
      .auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        setMessage("Sent! Check your email for further instructions")
      );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
      width="100%"
      textAlign="center"
    >
      <Box p={2} mt={12}>
        <Typography variant="h1" className={classes.title}>
          Resuminator
        </Typography>
        <Typography variant="h2" className={classes.greeting}>
          Forgot your password? No worries!
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          size="small"
          name="email"
          type="email"
          value={email}
          className={classes.TextField}
          placeholder="example@xyz.com"
          onChange={handleChange}
        />
        <Typography
          variant="body1"
          className={classes.notice}
          color="textSecondary"
        >
          In case you have forgot your password, or wish to reset it for a new
          one. Just type in your email, and we shall send you the instructions
          to reset your password securely.
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="inherit"
            disableElevation
            className={classes.btn}
            href="/"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            className={classes.btn}
            onClick={handleSubmit}
          >
            Send Instructions
          </Button>
        </Box>
        <Typography className={classes.error} variant="body2">
          {message}
        </Typography>
      </Box>
      <ServerCheck/>
    </Box>
  );
};

export default PasswordReset;
