import axios from "axios";
import { baseUrl } from "../config/apis";
import getHeaders from "../utils/headers";

/**
 * Places a request to get the account data for the current account.
 * @param token Firebase ID Token
 * @returns User Account Data Object
 */
export const placeAccountDataRequest = async (token: string = null) => {
  const res = await axios.get(`${baseUrl}/settings/account/request`, {
    headers: getHeaders(token),
  });

  return res.data;
};

/**
 * Returns the User Account Parameters (which includes info about data requests etc.)
 * @param token Firebase ID Token
 * @returns User Account Data Object
 */
export const getAccountSettings = async (token: string = null) => {
  const res = await axios.get(`${baseUrl}/settings/account`, {
    headers: getHeaders(token),
  });

  return res.data;
};

/**
 * Places a request to delete the current user account
 * @param token Firebase ID Token
 * @returns User Account Data Object
 */
export const deleteAccount = async (token: string = null) => {
  const res = await axios.delete(`${baseUrl}/settings/account`, {
    headers: getHeaders(token),
  });

  return res.data;
};
