/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, Chip, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.contrast.light,
    marginRight: "0.2rem"
  },
}));

function Tags(props) {
  const classes = useStyles();
  let key = 0;
  const tags = props.tags;
  return (
    <Box display="flex" justifyContent="flex-start" alignItems="flex-start" pb={2}>
      {tags.map((item) => {
        ++key;
        return (
          <Chip key={key} className={classes.root} size="small" label={item} />
        );
      })}
    </Box>
  );
}

export default Tags;
