/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

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
