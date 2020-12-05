/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { MuiThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AlertDialog } from "./components/common/AlertDialog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Content from "./layout/Content";
import { initApp } from "./redux/app.actions";
import "./styles/App.css";
import { resuminator } from "./themes/resuminator";

function App() {
  const [openAlert, setOpenAlert] = useState(
    process.env.NODE_ENV === "production"
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(initApp("viveknigam3003"));
  }, [dispatch]);

  const handleClose = () => setOpenAlert(false);

  return (
    <MuiThemeProvider theme={resuminator}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AlertDialog
          title="Resuminator : Preview 🎉"
          message="Thanks for joining Resuminator Early Access Programme! Currently, Resuminator is in preview mode - this means that you may play around the app but your data shall not persist after you leave the app."
          open={openAlert}
          onClick={handleClose}
          onClose={handleClose}
          buttonText="Got it! 👍🏻"
        />
        <Header />
        <Content />
        <Footer />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

export default App;
