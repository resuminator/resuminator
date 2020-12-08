import { IconButton, makeStyles } from "@material-ui/core";
import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import { FiArrowUp, FiCheck } from "react-icons/fi";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 0,
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  }
}))

function ConfirmButton({ onClick, changed }) {
  const classes = useStyles();
  return (
    <AnimateSharedLayout>
      {changed ? (
        <motion.div layoutId="confirm-button">
          <IconButton size="medium" className={classes.root} color="primary" onClick={onClick}>
            <FiCheck />
          </IconButton>
        </motion.div>
      ) : (
        <motion.div layoutId="confirm-button">
          <IconButton size="medium" className={classes.root} onClick={onClick}>
            <FiArrowUp color="primary" />
          </IconButton>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}

export default ConfirmButton;
