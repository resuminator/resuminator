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
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import MaintenanceImage from "../images/pixeltrue-settings-1.png";

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
    width: "40%",
    textAlign: "center",
    fontSize: "1rem",
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
  error: {
    marginTop: "1rem",
    color: theme.palette.secondary.dark,
  },
}));

const Maintenance = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
      width="100%"
      textAlign="center"
      mt={8}
    >
      <Typography variant="h1" className={classes.title}>
        Resuminator
      </Typography>
      <Typography variant="h2" className={classes.greeting}>
        We're currently under maintenance
      </Typography>
      <Typography
        variant="body1"
        className={classes.notice}
        color="textSecondary"
      >
        If you're seeing this page, it means that we have enabled our
        maintenance mode and are evaluating some critical functionality. We're
        extremely sorry for this inconveniece and promise that we'll be up and
        running pretty soon.
      </Typography>
      <img
        src={MaintenanceImage}
        alt="Under Maintenance"
        height="350px"
        width="auto"
      />
    </Box>
  );
};

export default Maintenance;
