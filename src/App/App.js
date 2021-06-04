/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../components/Auth/AuthContext";
import { initApp } from "../redux/app.actions";
import firebaseSDK from "../Services/firebaseSDK";
import "../styles/App.css";
import ProtectedRoutes from "./Protected.Routes";
import Routes from "./Routes";

function App() {
  const savedState = JSON.parse(localStorage.getItem("loggedIn"));
  const newUser = JSON.parse(localStorage.getItem("newUser"));
  const [loggedIn, setLoggedIn] = useState(savedState);
  const auth = useContext(AuthContext);
  const dispatch = useDispatch();

  firebaseSDK.auth().onAuthStateChanged((user) => {
    return user ? setLoggedIn(true) : setLoggedIn(false);
  });

  React.useEffect(() => {
    if (loggedIn && auth.token && auth.user && !newUser) {
      dispatch(initApp(auth.token));
    }
  }, [dispatch, loggedIn, auth.token, auth.user, newUser]);

  return (
    <Router>{!loggedIn || newUser ? <Routes /> : <ProtectedRoutes />}</Router>
  );
}

export default App;
