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
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Manrope",
    fontSize: "1rem",
    color: theme.palette.primary.dark,
  },
  primaryBtn: {
    textTransform: "none",
    fontFamily: "Inter",
  },
  secondaryBtn: {
    textTransform: "none",
    color: theme.palette.secondary.dark,
    fontFamily: "Inter",
  },
  content: {
    fontFamily: "Inter",
    paddingBottom: "1.2rem",
  },
}));

const CustomDialog = ({
  title,
  content,
  open,
  setOpen,
  primaryAction,
  primaryText,
  secondaryAction,
  secondaryText,
}) => {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle className={classes.title}>{title}</DialogTitle>
      <DialogContent className={classes.content}>{content}</DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={secondaryAction}
          className={classes.secondaryBtn}
        >
          {secondaryText}
        </Button>
        <Button
          color="primary"
          onClick={primaryAction}
          variant="contained"
          className={classes.primaryBtn}
        >
          {primaryText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
