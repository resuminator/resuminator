/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

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
    headers: getHeaders(token)
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
    headers: getHeaders(token)
  });

  return res.data;
};

/**
 * Places a request to delete the current user account
 * @param token Firebase ID Token
 * @returns User Account Data Object
 */
export const deleteAccountRequest = async (token: string = null) => {
  const res = await axios.delete(`${baseUrl}/settings/account`, {
    headers: getHeaders(token)
  });

  return res.data;
};
