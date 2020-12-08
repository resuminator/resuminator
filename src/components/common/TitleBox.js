/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box } from "@material-ui/core";
import React from "react";

export const TitleBox = ({id, pb, flexDirection, children}) => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      flexDirection={flexDirection || "row"}
      pb={pb || 1}
      id={id}
    >
      {children}
    </Box>
  );
};
