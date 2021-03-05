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
import axios from "axios";
import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import ServerCheck from "../../App/ServerCheck";
import { MAIL_WEBHOOK } from "../../utils/Server";
import Loader from "../common/Loader";
import { signUpUser } from "./AuthAPIs";
import SecondaryAction from "./SecondaryAction";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Karla",
    fontWeight: 700,
    letterSpacing: "-0.2rem",
    fontSize: "3rem",
    color: theme.palette.primary.dark,
  },
  greeting: {
    fontSize: "1.3rem",
    fontFamily: "Karla",
    letterSpacing: "-0.08rem",
    color: theme.palette.grey[900],
    padding: "1rem",
  },
  TextField: {
    marginTop: "1rem",
  },
  buttonText: {
    color: theme.palette.grey[900],
    fontSize: "0.9rem",
    fontFamily: "Karla",
    textTransform: "none",
    paddingTop: "0.4rem",
    cursor: "pointer",
  },
  loginBtn: {
    textTransform: "none",
    fontFamily: "Karla",
    letterSpacing: "-0.05rem",
    fontSize: "1rem",
    marginTop: "2rem",
    display: "flex",
    textAlign: "center",
  },
  loader: {
    margin: "0.88rem",
    width: "2rem",
    height: "0rem",
    display: "flex",
    alignContent: "center",
    justifyContent: "space-around",
  },
  subtitle: {
    margin: "0rem 0",
  },
}));

const SignUpScreen = () => {
  const classes = useStyles();
  const { addToast } = useToasts();
  const setError = (message) =>
    addToast(message, { appearance: "error", autoDismiss: true });
  const [userPayload, setUserPayload] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullname: "",
  });
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const MIN_LENGTH = 8;

  const handleChange = (e) => {
    e.preventDefault();
    setUserPayload({ ...userPayload, [e.target.name]: e.target.value });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userPayload.fullname) return setError("Please enter your name!");
    if (!(userPayload.email && userPayload.password))
      return setError("Please enter your email/password!");
    if (!userPayload.password) return setError("Please enter new password!");
    if (!userPayload.confirmPassword)
      return setError("Please confirm new password!");
    if (userPayload.password.length < MIN_LENGTH)
      return setError("Password should atleast be 8 characters");
    if (userPayload.password !== userPayload.confirmPassword)
      return setError("Passwords don't match, please check again.");

    localStorage.setItem("newUser", true);
    localStorage.setItem("firstTime", true);
    setLoading(true);

    signUpUser(userPayload.email, userPayload.password)
      .then(() =>
        axios
          .post(`${MAIL_WEBHOOK}/signup`, {
            recepient: userPayload.email,
            name: userPayload.fullname,
          })
          .catch((e) => console.log(e))
      )
      .then(() => {
        setLoading(false);
        localStorage.setItem("loggedIn", true);
        localStorage.removeItem("newUser");
        setCompleted(true);
      })
      .catch((error) => {
        setLoading(false);
        localStorage.removeItem("newUser");
        setError(error.message);
      });
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
        <Typography variant="subtitle2" color="textSecondary">
          Build an awesome single-page resume today!
        </Typography>
      </Box>
      <Box m={2} mb={1} display="flex" flexDirection="column" width="16rem">
        <Typography variant="h3" className={classes.greeting}>
          Let's create a new account!
        </Typography>
        <TextField
          label="Full Name"
          variant="outlined"
          size="small"
          name="fullname"
          type="name"
          value={userPayload.fullname}
          className={classes.TextField}
          placeholder="Enter name"
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          size="small"
          name="email"
          type="email"
          value={userPayload.email}
          className={classes.TextField}
          placeholder="example@xyz.com"
          onChange={handleChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          size="small"
          name="password"
          type="password"
          className={classes.TextField}
          value={userPayload.password}
          fullWidth
          placeholder="Atleast 8 Characters"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          size="small"
          name="confirmPassword"
          type="password"
          className={classes.TextField}
          value={userPayload.confirmPassword}
          fullWidth
          placeholder="Atleast 8 Characters"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {completed ? (
          <Button
            variant="contained"
            color="primary"
            disableElevation
            className={classes.loginBtn}
            href="/verify"
          >
            Get Started! 🚀
          </Button>
        ) : (
          <Button
            variant="contained"
            disableElevation
            color="primary"
            className={classes.loginBtn}
            onClick={handleSubmit}
          >
            {loading ? (
              <Loader className={classes.loader} />
            ) : (
              "Create new account"
            )}
          </Button>
        )}
      </Box>
      <SecondaryAction page="SIGNUP" />
      <ServerCheck />
    </Box>
  );
};

export default SignUpScreen;
