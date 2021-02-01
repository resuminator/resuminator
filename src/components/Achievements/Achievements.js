/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { checkEmptyState } from "../../utils/Helpers";
import ColoredLine from "../common/Line";

const useStyles = makeStyles((theme) => ({
  root: {
    wordBreak: "break-word"
  },
  title: {
    fontSize: "1.5rem",
  },
}));

function Achievements() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      pb={2}
      flexGrow={1}
      width="100%"
      className={classes.root}
    >
      <Typography
        id="title"
        variant="h1"
        color="primary"
        className={classes.title}
      >
        Achievements
      </Typography>
      <ColoredLine opacity="0.5" />
    </Box>
  );
}

export default Achievements;
