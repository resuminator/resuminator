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
import { Redirect, Route, Switch } from "react-router-dom";
import SignoutScreen from "../components/Auth/SignoutScreen";
import UserAccount from "../components/User/UserAccount";
import Layout from "../layout/Layout";
import Providers from "./Providers";

const ProtectedRoutes = () => {
  return (
    <Providers>
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route exact path="/account" component={UserAccount} />
        <Route exact path="/thankyou" component={SignoutScreen} />
        <Redirect from="*" to="/" />
      </Switch>
    </Providers>
  );
};

export default ProtectedRoutes;
