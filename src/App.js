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
import "./styles/App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { MuiThemeProvider } from "@material-ui/core";
import { resuminator } from "./themes/resuminator";

function App() {
  return (
    <MuiThemeProvider theme={resuminator}>
      <Header />
      <Content />
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
