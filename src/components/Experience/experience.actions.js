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

export const updateExperienceById = (payload) => {
  return {
    type: "UPDATE_EXPERIENCE_INFO_STATE",
    payload,
  };
};

export const experienceInfoRequest = () => {
  return {
    type: "EXPERIENCE_INFO_SERVER_REQUEST",
  };
};

export const fetchExperienceInfoSuccess = (info) => {
  return {
    type: "FETCH_EXPERIENCE_INFO_SUCCESS",
    payload: info,
  };
};

export const fetchExperienceInfoFailure = (error) => {
  return {
    type: "FETCH_EXPERIENCE_INFO_FAILURE",
    payload: error,
  };
};

export const addExperienceInfoFailure = (error) => {
  return {
    type: "ADD_EXPERIENCE_INFO_FAILURE",
    payload: error,
  };
};

export const deleteExperienceInfoFailure = (error) => {
  return {
    type: "DELETE_EXPERIENCE_INFO_FAILURE",
    payload: error,
  };
};

export const updateExperienceInfoFailure = (error) => {
  return {
    type: "UPDATE_EXPERIENCE_INFO_FAILURE",
    payload: error,
  };
};

export const fetchExperience = (token) => {
  return (dispatch) => {
    dispatch(experienceInfoRequest());
    return axios
      .get(`${SERVER}/experience/user`, { headers: getHeader(token) })
      .then((response) => dispatch(fetchExperienceInfoSuccess(response.data)))
      .catch((error) => dispatch(fetchExperienceInfoFailure(error.message)));
  };
};

export const addExperience = (token) => {
  return (dispatch) => {
    dispatch(experienceInfoRequest());
    return axios
      .post(`${SERVER}/experience/add`, {} ,{headers: getHeader(token)} )
      .then(() => dispatch(fetchExperience(token)))
      .catch((error) => dispatch(addExperienceInfoFailure(error)));
  };
};

export const deleteExperience = (token, id) => {
  return (dispatch) => {
    dispatch(experienceInfoRequest());
    return axios
      .delete(`${SERVER}/experience/delete/${id}`, {
        headers: getHeader(token),
      })
      .then(() => dispatch(fetchExperience(token)))
      .catch((error) => dispatch(deleteExperienceInfoFailure(error)));
  };
};

export const updateExperience = (token, id, payload) => {
  return (dispatch) => {
    dispatch(experienceInfoRequest());
    return axios
      .put(`${SERVER}/experience/update/${id}`, payload, {
        headers: getHeader(token),
      })
      .then(() => dispatch(fetchExperience(token)))
      .catch((error) => dispatch(updateExperienceInfoFailure(error)));
  };
};
