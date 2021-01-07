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
import { Route, Switch } from "react-router-dom";
import Ticker from "../components/common/Ticker";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UserAccount from "../components/User/UserAccount";
import Content from "../layout/Content";
import NotFound from "./404";
import Providers from "./Providers";

const ProtectedRoutes = ({ children }) => {
  return (
    <Providers>
      <Ticker />
      <Header />
      <Switch>
        <Route exact path="/">
          {children}
          <Content />
        </Route>
        <Route exact path="/account" component={UserAccount} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Providers>
  );
};

export default ProtectedRoutes;
