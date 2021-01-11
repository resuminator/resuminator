/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles({
  h3: {
    paddingTop: "2rem",
    fontFamily: "Karla",
    fontSize: "1.5rem",
    letterSpacing: "-0.05rem",
    fontWeight: 700,
    color: grey[900],
  },
  subtitle: {
    fontFamily: "Roboto",
    margin: "0.4rem 0 0.8rem 0",
    fontSize: "0.9rem",
    color: grey[600],
  },
  textLabel: {
    fontFamily: 'Roboto',
    color: grey[900],
    fontSize: "1rem",
  },
});

const Billing = () => {
  const classes = useStyles();

  return (
    <Box
      alignItems="flex-start"
      height="100%"
      display="flex"
      flexDirection="column"
      width="100%"
      pt={4}
    >
      <Typography variant="h3" className={classes.h3}>
        Billing
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        You can see your current plan and billing info below.
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography variant="body1" className={classes.textLabel}>
          Resuminator Early Access Member
        </Typography>
        <Typography variant="subtitle1" className={classes.textLabel}>
          FREE - ₹ 0.00
        </Typography>
      </Box>
    </Box>
  );
};

export default Billing;
