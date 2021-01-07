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
import LoginScreen from "../components/Auth/LoginScreen";
import NewBetaUser from "../components/Auth/NewBetaUser";
import PasswordReset from "../components/Auth/PasswordReset";
import SignoutScreen from "../components/Auth/SignoutScreen";
import NotFound from "./404";
import Providers from "./Providers";

const Routes = () => {
  return (
    <Providers>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/resetpassword" component={PasswordReset} />
        <Route exact path="/newuser" component={NewBetaUser} />
        <Route exact path="/thankyou" component={SignoutScreen} />
        <Route component={NotFound} />
      </Switch>
    </Providers>
  );
};

export default Routes;
