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

export const addUserInfo = (payload) => {
  return {
    type: "ADD_USERINFO",
    payload,
  };
};

export const fetchUserInfoRequest = () => {
  return {
    type: "FETCH_USERINFO_REQUEST",
  };
};

export const fetchUserInfoSuccess = (info) => {
  return {
    type: "FETCH_USERINFO_SUCCESS",
    payload: info,
  };
};

export const fetchUserInfoFailure = (error) => {
  return {
    type: "FETCH_USERINFO_FAILURE",
    payload: error,
  };
};

export const updateUserInfoFailure = (error) => {
  return {
    type: "UPDATE_USERINFO_FAILURE",
    payload: error,
  };
};

export const fetchUser = (username) => {
  return (dispatch) => {
    dispatch(fetchUserInfoRequest());
    return axios
      .get(`${SERVER}/users/${username}`)
      .then((response) => dispatch(fetchUserInfoSuccess(response.data)))
      .catch((error) => dispatch(fetchUserInfoFailure(error.message)));
  };
};

export const updateUserInfo = (username, userId, payload) => {
  return (dispatch) => {
    dispatch(fetchUserInfoRequest());
    return axios
      .put(`${SERVER}/users/update/${userId}`, { payload })
      .then(() => dispatch(fetchUser(username)))
      .catch((error) => dispatch(updateUserInfoFailure(error)));
  };
};
