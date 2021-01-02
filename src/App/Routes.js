import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginScreen from "../components/Auth/LoginScreen";
import NewBetaUser from "../components/Auth/NewBetaUser";
import PasswordReset from "../components/Auth/PasswordReset";
import SignoutScreen from "../components/Auth/SignoutScreen";
import NotFound from "./404";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginScreen} />
      <Route exact path="/resetpassword" component={PasswordReset} />
      <Route exact path="/newuser" component={NewBetaUser} />
      <Route exact path="/thankyou" component={SignoutScreen} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
