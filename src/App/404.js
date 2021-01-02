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
    textAlign: "center",
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
    color: theme.palette.secondary.dark,
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
      width="100%"
      textAlign="center"
      mt={12}
      mb={10}
    >
      <Typography variant="h1" className={classes.title}>
        Resuminator
      </Typography>
      <Typography variant="h2" className={classes.greeting}>
        I guess we're lost :/
      </Typography>
      <Typography variant="h2" className={classes.greeting}>
        404 - NOT FOUND
      </Typography>
      <Typography
        variant="body1"
        className={classes.notice}
        color="textSecondary"
      >
        The page you're looking for does not exist or it has been moved
        elsewhere.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={classes.btn}
        href={"/"}
        startIcon={<FiArrowLeft />}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
