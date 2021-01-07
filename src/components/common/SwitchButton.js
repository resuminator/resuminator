import {
  FormControlLabel,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
    letterSpacing: "-0.01rem",
    fontFamily: "Roboto",
    color: theme.palette.text.secondary,
  },
}));

const SwitchButton = ({ name, checked, onChange, label }) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.root}
      control={
        <Switch
          checked={checked}
          size="small"
          onChange={onChange}
          name={name}
        />
      }
      label={
        <Typography variant="body2">{label || "Show on resume"}</Typography>
      }
    />
  );
};

export default SwitchButton;
