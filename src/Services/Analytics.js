/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { analytics } from "./firebaseSDK";
import axios from "axios";
import { ANALYTICS_SERVER } from "../utils/Server";

export const analyticsEvent = (name, props) => {
  try {
    return analytics.logEvent(name, props);
  } catch (e) {
    console.log("Error while logging event", e);
  }
};

export const logKPI = async () => {
  return process.env.NODE_ENV === "production"
    ? axios
        .get(`${ANALYTICS_SERVER}/add`)
        .then((res) => res.status)
        .catch((e) => e.message)
    : 200;
};
