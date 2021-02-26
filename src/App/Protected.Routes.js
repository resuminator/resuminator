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
import BITPage from "../components/Custom/BIT/BITPage";
import UserAccount from "../components/User/UserAccount";
import Content from "../layout/Content";
import Layout from "../layout/Layout";
import Providers from "./Providers";

const ProtectedRoutes = () => {
  return (
    <Providers>
      <Layout>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/bitmesra" component={BITPage} />
          <Route exact path="/account" component={UserAccount} />
          <Route exact path="/thankyou" component={SignoutScreen} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </Providers>
  );
};

export default ProtectedRoutes;
