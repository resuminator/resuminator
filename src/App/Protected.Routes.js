/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "../components/Auth/AuthContext";
import SignoutScreen from "../components/Auth/SignoutScreen";
import VerifyEmail from "../components/Auth/VerifyEmail";
import BITPage from "../components/Custom/BIT/BITPage";
import UserAccount from "../components/User/UserAccount";
import Content from "../layout/Content";
import Layout from "../layout/Layout";
import Providers from "./Providers";

const ProtectedRoutes = () => {
  const auth = useContext(AuthContext);

  const VerifiedRoutes = () => (
    <Switch>
      <Route exact path="/" component={Content} />
      <Route exact path="/bitmesra" component={BITPage} />
      <Route exact path="/account" component={UserAccount} />
      <Route exact path="/thankyou" component={SignoutScreen} />
      <Redirect from="*" to="/" />
    </Switch> 
  );

  const UnverifiedRoutes = () => (
    <Switch>
      <Route exact path="/verify" component={VerifyEmail} />
      <Redirect from="*" to="/verify" />
    </Switch>
  );

  return (
    <Providers>
      <Layout>
        {auth.verified ? <VerifiedRoutes /> : <UnverifiedRoutes />}
      </Layout>
    </Providers>
  );
};

export default ProtectedRoutes;
