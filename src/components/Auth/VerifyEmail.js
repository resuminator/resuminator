/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { useToasts } from "react-toast-notifications";
import { AuthContext } from "./AuthContext";

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
    textAlign: "cneter",
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
    margin: "1rem",
    textTransform: "none",
    fontFamily: "Karla",
  },
  error: {
    marginTop: "1rem",
    color: theme.palette.secondary.dark,
  },
}));

const VerifyEmail = () => {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  const { addToast } = useToasts();

  const handleVerification = () => {
    auth.user.sendEmailVerification();
    addToast("Verification email sent! Please check your inbox", {
      appearance: "success",
      autoDismiss: true,
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
      mb={10}
      height="100vh"
    >
      <Box p={2} mt={12}>
        <Typography variant="h1" className={classes.title}>
          Resuminator
        </Typography>
        <Typography variant="h2" className={classes.greeting}>
          Just one last step...
        </Typography>
        <Typography
          variant="body1"
          className={classes.notice}
          color="textSecondary"
        >
          We have sent you an email to verify your account for Resuminator.
          Please follow the link in that mail to continue. If you didn't get an
          email, click on the button below to re-send the verification email
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        onClick={handleVerification}
      >
        Re-send verification email
      </Button>
    </Box>
  );
};

export default VerifyEmail;
