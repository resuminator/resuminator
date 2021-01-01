import DateFnsUtils from "@date-io/date-fns";
import { MuiThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import { resuminator } from "../themes/resuminator";

const Providers = ({ children }) => {
  return (
    <MuiThemeProvider theme={resuminator}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {children}
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
};

export default Providers;
