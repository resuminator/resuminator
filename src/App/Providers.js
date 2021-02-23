/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import DateFnsUtils from "@date-io/date-fns";
import { MuiThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import { ToastProvider } from "react-toast-notifications";
import { resuminator } from "../themes/resuminator";

const Providers = ({ children }) => {
  return (
    <MuiThemeProvider theme={resuminator}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ToastProvider>{children}</ToastProvider>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
};

export default Providers;
