/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Button, makeStyles } from "@material-ui/core";
import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 0,
    margin: "1rem",
    textTransform: "none",
    fontFamily: "Karla",
    fontWeight: 400,
  },
  cancel :{
    color: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark,
  }
}));

function ConfirmButton({ onClick, changed }) {
  const classes = useStyles();
  return (
    <AnimateSharedLayout>
      {changed ? (
        <motion.div layoutId="confirm-button">
          <Button
            size="small"
            variant="contained"
            className={classes.root}
            color="primary"
            onClick={onClick}
          >
            Save Changes
          </Button>
         
        </motion.div>
      ) : (
        <motion.div layoutId="confirm-button">
          <Button
            size="small"
            color="primary"
            variant="outlined"
            className={`${classes.root} ${classes.cancel}`}
            onClick={onClick}
          >
            Cancel
          </Button>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}

export default ConfirmButton;
