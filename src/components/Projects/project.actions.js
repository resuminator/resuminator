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

export const fetchProject = (token) => {
  return (dispatch) => {
    dispatch(projectInfoRequest());
    return axios
      .get(`${SERVER}/project/user`, { headers: getHeader(token) })
      .then((response) => dispatch(fetchProjectInfoSuccess(response.data)))
      .catch((error) => dispatch(projectInfoFailure(error)));
  };
};

export const addProject = (token) => {
  return (dispatch) => {
    dispatch(projectInfoRequest());
    return axios
      .post(`${SERVER}/project/add`, {}, { headers: getHeader(token) })
      .then(() => dispatch(fetchProject(token)))
      .catch((error) => dispatch(projectInfoFailure(error)));
  };
};

export const deleteProject = (token, id) => {
  return (dispatch) => {
    dispatch(projectInfoRequest());
    return axios
      .delete(`${SERVER}/project/delete/${id}`, { headers: getHeader(token) })
      .then(() => dispatch(fetchProject(token)))
      .catch((error) => dispatch(projectInfoFailure(error)));
  };
};

export const updateProject = (token, id, payload) => {
  return (dispatch) => {
    dispatch(projectInfoRequest());
    return axios
      .put(`${SERVER}/project/update/${id}`, payload, {
        headers: getHeader(token),
      })
      .then(() => dispatch(fetchProject(token)))
      .catch((error) => dispatch(projectInfoFailure(error)));
  };
};
