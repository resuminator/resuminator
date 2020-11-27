import { makeStyles, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

const useStyles = makeStyles({
  heading: {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  subtitle: {
    fontSize: "0.8rem",
  },
});

export const InputHeader = ({ heading, subtitle }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography color="primary" variant="body1" className={classes.heading}>
        {heading}
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
        className={classes.subtitle}
      >
        {subtitle}
      </Typography>
    </Fragment>
  );
};
