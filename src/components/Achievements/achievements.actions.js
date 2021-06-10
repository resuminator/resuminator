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

export const updateAchievementState = (payload) => {
  return {
    type: "UPDATE_ACHIEVEMENT_INFO_STATE",
    payload,
  };
};

export const achievementInfoRequest = () => {
  return {
    type: "ACHIEVEMENT_INFO_SERVER_REQUEST",
  };
};

export const fetchAchievementInfoSuccess = (info) => {
  return {
    type: "FETCH_ACHIEVEMENT_INFO_SUCCESS",
    payload: info,
  };
};

export const achievementInfoFailure = (error) => {
  return {
    type: "ACHIEVEMENT_INFO_SERVER_FAILURE",
    payload: error,
  };
};

export const fetchAchievement = (token) => {
  return (dispatch) => {
    dispatch(achievementInfoRequest());
    return axios
      .get(`${SERVER}/achievement/user`, { headers: getHeader(token) })
      .then((response) => dispatch(fetchAchievementInfoSuccess(response.data)))
      .catch((error) => dispatch(achievementInfoFailure(error)));
  };
};

export const addAchievement = (token) => {
  return (dispatch) => {
    dispatch(achievementInfoRequest());
    return axios
      .post(`${SERVER}/achievement/add`, {}, { headers: getHeader(token) })
      .then(() => dispatch(fetchAchievement(token)))
      .catch((error) => dispatch(achievementInfoFailure(error)));
  };
};

export const updateAchievement = (token, payload) => {
  return (dispatch) => {
    dispatch(achievementInfoRequest());
    return axios
      .put(`${SERVER}/achievement/update`, payload, {
        headers: getHeader(token),
      })
      .then(() => dispatch(fetchAchievement(token)))
      .catch((error) => dispatch(achievementInfoFailure(error)));
  };
};
