/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import React from "react";
import Resume from "./Resume/Resume";
import { Box } from "@material-ui/core";
import UserInput from "./UserInput";
import useWindowDimensions from "../hooks/useWindowDimensions";
import MobileView from "./MobileView";

function Content() {
  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      {width >= 1280 ? (
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          id="main"
          m={5}
        >
          <UserInput />
          <Resume />
        </Box>
      ) : (
        <MobileView />
      )}
    </React.Fragment>
  );
}

export default Content;
