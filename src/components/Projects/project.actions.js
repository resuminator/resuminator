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

export const updateProjectState = (payload) => {
  return {
    type: "UPDATE_PROJECT_INFO_STATE",
    payload,
  };
};

export const projectInfoRequest = () => {
  return {
    type: "PROJECT_INFO_SERVER_REQUEST",
  };
};

export const fetchProjectInfoSuccess = (info) => {
  return {
    type: "FETCH_PROJECT_INFO_SUCCESS",
    payload: info,
  };
};

export const projectInfoFailure = (error) => {
  return {
    type: "PROJECT_INFO_SERVER_FAILURE",
    payload: error,
  };
};

export const fetchProject = (username) => {
  return (dispatch) => {
    dispatch(projectInfoRequest());
    return axios
      .get(`${SERVER}/project/user/${username}`)
      .then((response) => dispatch(fetchProjectInfoSuccess(response.data)))
      .catch((error) => dispatch(projectInfoFailure(error)));
  };
};

export const addProject = (username) => {
  return (dispatch) => {
    dispatch(projectInfoRequest());
    return axios
      .post(`${SERVER}/project/add`, { username })
      .then(() => dispatch(fetchProject(username)))
      .catch((error) => dispatch(projectInfoFailure(error)));
  };
};

export const deleteProject = (username, id) => {
  return (dispatch) => {
    dispatch(projectInfoRequest());
    return axios
      .delete(`${SERVER}/project/delete/${id}`)
      .then(() => dispatch(fetchProject(username)))
      .catch((error) => dispatch(projectInfoFailure(error)));
  };
};

export const updateProject = (username, id, payload) => {
  return (dispatch) => {
    dispatch(projectInfoRequest());
    return axios
      .put(`${SERVER}/project/update/${id}`, { payload })
      .then(() => dispatch(fetchProject(username)))
      .catch((error) => dispatch(projectInfoFailure(error)));
  };
};
