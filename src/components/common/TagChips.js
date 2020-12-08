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

const useStyles = makeStyles({
  root: {
    marginRight: "0.3rem",
    minWidth: "2.5rem",
  },
});

export const TagChips = ({ tags, variant, color, size, className }) => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyItems="space-between" mb={2}>
      {tags.map((item) => (
        <Chip
          key={item}
          variant={variant || "default"}
          color={color || "primary"}
          label={item}
          size={size || "small"}
          className={className || classes.root}
        />
      ))}
    </Box>
  );
};
