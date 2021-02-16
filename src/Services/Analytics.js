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
  return axios
    .get(`${ANALYTICS_SERVER}/add`)
    .then((res) => res.status)
    .catch((e) => e.message);
};
