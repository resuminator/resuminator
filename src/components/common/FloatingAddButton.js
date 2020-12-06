import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import { FiPlus } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.contrast.light,
    color: theme.palette.primary.main,
    border: "dashed",
    borderWidth: "0.1rem",
    width: "3.2rem",
    "&:hover, &:active": {
      border: "solid",
      borderWidth: "0.1rem",
      color: theme.palette.contrast.light,
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

function FloatingAddButton(props) {
  const classes = useStyles();
  return (
    <IconButton className={classes.root} onClick={props.onClick}>
      <FiPlus />
    </IconButton>
  );
}

export default FloatingAddButton;
