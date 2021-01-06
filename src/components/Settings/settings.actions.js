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

export const updateSettingsState = (payload) => {
  return {
    type: "UPDATE_SETTINGS_STATE",
    payload
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

export const fetchSettings = (uid) => {
  return (dispatch) => {
    dispatch(fetchSettingsRequest());
    return axios
      .get(`${SERVER}/settings/user/${uid}`)
      .then((response) => dispatch(fetchSettingsSuccess(response.data)))
      .catch((error) => dispatch(fetchSettingsFailure(error)));
  };
};

export const createSettings = (uid) => {
  return (dispatch) => {
    dispatch(fetchSettingsRequest());
    return axios
      .post(`${SERVER}/settings/add`, { uid })
      .then(() => dispatch(fetchSettings(uid)))
      .catch((error) => dispatch(fetchSettingsFailure(error)));
  };
};

export const updateSettings = (uid, id, payload) => {
  return (dispatch) => {
    dispatch(fetchSettingsRequest());
    return axios
      .put(`${SERVER}/settings/update/${id}`, { payload })
      .then(() => dispatch(fetchSettings(uid)))
      .catch((error) => dispatch(fetchSettingsFailure(error)));
  };
};
