import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "26rem",
    flexDirection: "column",
    padding: "1rem",
    margin: "1rem",
    marginLeft: "0rem",
    borderRadius: "1rem",
    backgroundColor: theme.palette.contrast.light,
  },
}));

export const InputCard = ({id, children, onClick}) => {
  const classes = useStyles();
  return (
    <Paper component="form" elevation={2} className={classes.root} key={id} onClick={onClick}>
      {children}
    </Paper>
  );
};
