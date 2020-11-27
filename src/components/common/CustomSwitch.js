import {
  FormControlLabel,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(0),
    width: "12rem",
  },
  label: {
    fontFamily: theme.typography.fontFamily.secondary,
    fontSize: "0.8rem",
  },
}));

export const CustomSwitch = ({ checked, onChange, label }) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.root}
      control={<Switch size="normal" checked={checked} onChange={onChange} />}
      label={
        <Typography
          variant="subtitle1"
          color="primary"
          className={classes.label}
        >
          {label}
        </Typography>
      }
    />
  );
};
