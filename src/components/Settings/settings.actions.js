/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import axios from "axios";
import { SERVER } from "../../utils/Server";
import getHeader from "../Auth/Headers";

export const updateSettingsState = (payload) => {
  return {
    type: "UPDATE_SETTINGS_STATE",
    payload,
  };
};

export const fetchSettingsRequest = () => {
  return {
    type: "SETTINGS_SERVER_REQUEST",
  };
};

export const fetchSettingsSuccess = (info) => {
  return {
    type: "FETCH_SETTINGS_SUCCESS",
    payload: info,
  };
};

export const fetchSettingsFailure = (error) => {
  return {
    type: "SETTINGS_SERVER_FAILURE",
    payload: error,
  };
};

export const fetchSettings = (token) => {
  return (dispatch) => {
    dispatch(fetchSettingsRequest());
    return axios
      .get(`${SERVER}/settings/user`, { headers: getHeader(token) })
      .then((response) => dispatch(fetchSettingsSuccess(response.data)))
      .catch((error) => dispatch(fetchSettingsFailure(error)));
  };
};

export const createNewSettingsDocument = (token) => {
  return axios
    .post(`${SERVER}/settings/add`, { headers: getHeader(token) })
    .then((response) => response.data)
    .catch((err) => err.message);
};

export const updateSettings = (token, payload) => {
  return (dispatch) => {
    dispatch(fetchSettingsRequest());
    return axios
      .put(`${SERVER}/settings/update`, payload, { headers: getHeader(token) })
      .then(() => dispatch(fetchSettings(token)))
      .catch((error) => dispatch(fetchSettingsFailure(error)));
  };
};
