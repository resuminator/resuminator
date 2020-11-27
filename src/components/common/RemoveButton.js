import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    width: "1rem",
    textTransform: "none",
    fontFamily: theme.typography.fontFamily.primary,
    color: theme.palette.secondary.dark,
    borderColor: theme.palette.secondary.dark,
  },
}));
function RemoveButton(props) {
  const classes = useStyles();

  return (
    <Button variant="outlined" className={classes.root} onClick={props.onClick}>
      <Typography variant="caption">Remove</Typography>
    </Button>
  );
}

export default RemoveButton;
