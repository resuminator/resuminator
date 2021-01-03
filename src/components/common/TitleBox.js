/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    wordWrap: "break-word",
    width: "100%"
  }
})

export const TitleBox = ({id, pb, flexDirection, children}) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      flexDirection={flexDirection || "row"}
      pb={pb || 1}
      id={id}
      className={classes.root}
    >
      {children}
    </Box>
  );
};
