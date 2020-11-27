import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: (props) => props.color || theme.palette.primary.main,
    backgroundColor: (props) => props.color || theme.palette.primary.main,
    width: "100%",
    height: 1,
    opacity: (props) => props.opacity || 1,
    borderStyle: "inset",
    borderWidth: 0,
    overflow: "hidden",
  },
}));

const ColoredLine = ({color, opacity}) => {
  const classes = useStyles({color, opacity});

  return <hr className={classes.root} />;
};

export default ColoredLine;
