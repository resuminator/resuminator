/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import Loader from "../common/Loader";

const useStyles = makeStyles({
  loginBtn: {
    textTransform: "none",
    fontFamily: "Karla",
    letterSpacing: "-0.05rem",
    fontSize: "1rem",
    margin: "1rem 0 0rem 0",
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
});

const LoginButton = ({ isLoading, handleSubmit }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      disableElevation
      color="primary"
      className={classes.loginBtn}
      onClick={handleSubmit}
    >
      {isLoading ? (
        <Loader className={classes.loader} />
      ) : (
        "Log in to Resuminator"
      )}
    </Button>
  );
};

export default LoginButton;
