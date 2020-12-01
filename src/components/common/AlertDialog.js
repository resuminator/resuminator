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
        <Typography variant="h5" className={classes.title} color="primary">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography
          variant="body1"
          className={classes.message}
          font
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
