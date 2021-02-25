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
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import ServerCheck from "../../App/ServerCheck";
import firebaseSDK from "../../Services/firebaseSDK";
import Loader from "../common/Loader";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Karla",
    fontWeight: 700,
    letterSpacing: "-0.2rem",
    fontSize: "3rem",
    color: theme.palette.primary.dark,
  },
  greeting: {
    fontSize: "1.5rem",
    fontFamily: "Karla",
    letterSpacing: "-0.08rem",
    color: theme.palette.grey[900],
    padding: "1rem",
    paddingBottom: "2rem",
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

const LoginScreen = () => {
  const classes = useStyles();
  const {addToast} = useToasts();
  const error = (message) => addToast(message, {appearance: 'error', autoDismiss:true});
  const [userPayload, setUserPayload] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setUserPayload({ ...userPayload, [e.target.name]: e.target.value });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(userPayload.email && userPayload.password))
      return error("Please enter your email/password!");

    setLoading(true);
    firebaseSDK
      .auth()
      .signInWithEmailAndPassword(userPayload.email, userPayload.password)
      .then(() => localStorage.setItem("loggedIn", true))
      .then(() => setLoading(false))
      .catch(() => {
        setLoading(false);
        error("Incorrect Email or Password");
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
      <Box m={3} display="flex" flexDirection="column" width="16rem">
        <Typography variant="h3" className={classes.greeting}>
          Hello, nice to see you!
        </Typography>
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
        <Link href="/resetpassword">
          <Typography variant="subtitle2" className={classes.buttonText}>
            Forgot Password?
          </Typography>
        </Link>
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
            "Log in to Resuminator"
          )}
        </Button>
      </Box>
      <Typography variant="subtitle2" className={classes.subtitle}>
        Don't have an account yet?{" "}
        <a href="/signup" className={classes.buttonText}>
          Create a new one!
        </a>
      </Typography>
      <ServerCheck />
    </Box>
  );
};

export default LoginScreen;
