/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { fetchUser } from "./components/Title/title.actions";
import Content from "./layout/Content";
import "./styles/App.css";
import { resuminator } from "./themes/resuminator";

function App() {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(fetchUser("viveknigam3003"));
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={resuminator}>
      <Header />
      <Content />
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
