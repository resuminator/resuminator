import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    margin: "0rem 0",
  },
  buttonText: {
    color: theme.palette.grey[900],
    fontSize: "0.9rem",
    fontFamily: "Karla",
    textTransform: "none",
    paddingTop: "0.4rem",
    cursor: "pointer",
  },
}));

const SecondaryAction = ({ page }) => {
  const classes = useStyles();
  switch (page) {
    case "LOGIN":
      return (
        <Typography variant="subtitle2" className={classes.subtitle}>
          Don't have an account yet?{" "}
          <a href="/signup" className={classes.buttonText}>
            Create a new one!
          </a>
        </Typography>
      );
    default:
      return null;
  }
};

export default SecondaryAction;
