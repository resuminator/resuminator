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
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthContext } from "../components/Auth/AuthContext";
import LoginScreen from "../components/Auth/LoginScreen";
import NewBetaUser from "../components/Auth/NewBetaUser";
import PasswordReset from "../components/Auth/PasswordReset";
import SignoutScreen from "../components/Auth/SignoutScreen";
import { AlertDialog } from "../components/common/AlertDialog";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Content from "../layout/Content";
import { initApp } from "../redux/app.actions";
import firebaseSDK from "../Services/firebaseSDK";
import "../styles/App.css";
import { resuminator } from "../themes/resuminator";

function App() {
  const savedState = localStorage.getItem("loggedIn");
  const [, setIsLoggedIn] = useState(savedState);
  const [openAlert, setOpenAlert] = useState(
    process.env.NODE_ENV === "production"
  );
  const auth = useContext(AuthContext);
  const dispatch = useDispatch();

  firebaseSDK.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  React.useEffect(() => {
    if (savedState && auth.uid) {
      dispatch(initApp(auth.uid));
    }
  }, [dispatch, savedState, auth.uid]);

  const handleClose = () => setOpenAlert(false);

  return (
    <Router>
      {!savedState ? (
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/resetpassword" component={PasswordReset} />
          <Route exact path="/newuser" component={NewBetaUser} />
          <Route exact path="/thankyou" component={SignoutScreen} />
        </Switch>
      ) : (
        <MuiThemeProvider theme={resuminator}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <AlertDialog
              title="Welcome to Resuminator! 👋🏻"
              message="Thanks for joining Resuminator Early Access Programme! Currently, Resuminator is in Beta stage - this means that you may play around the app and we would love to know your feedback to improve!"
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
      )}
    </Router>
  );
}

export default App;
