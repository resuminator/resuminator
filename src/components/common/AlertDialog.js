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
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    letterSpacing: "-0.05rem",
  },
  message: {
    letterSpacing: "-0.02rem",
  },
  button: {
      textTransform: "none",
      fontWeight: 700,
      fontFamily: theme.typography.fontFamily.primary
  }
}));

export const AlertDialog = ({ title, message, open, onClose, onClick, buttonText }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="dialog-title">
        <Typography variant="body1" className={classes.title} color="primary">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography
          variant="body1"
          className={classes.message}
          gutterBottom
        >
          {message}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" className={classes.button} onClick={onClick} color="primary" autoFocus>
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
