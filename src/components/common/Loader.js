import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeInOut",
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem",
    width: "2rem",
    height: "2rem",
    display: "flex",
    justifyContent: "space-around"
  },
  dot: {
    display: "block",
    width: "0.5rem",
    height: "0.5rem",
    backgroundColor: theme.palette.primary.light,
    borderRadius: "0.25rem"
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <motion.div
      className={classes.root}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.div
        className={classes.dot}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.div
        className={classes.dot}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.div
        className={classes.dot}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
};

export default Loader;
