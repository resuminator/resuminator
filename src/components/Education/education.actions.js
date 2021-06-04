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

export const updateEducationState = (payload) => {
  return {
    type: "UPDATE_EDUCATION_INFO_STATE",
    payload,
  };
};

export const educationInfoRequest = () => {
  return {
    type: "EDUCATION_INFO_SERVER_REQUEST",
  };
};

export const fetchEducationInfoSuccess = (info) => {
  return {
    type: "FETCH_EDUCATION_INFO_SUCCESS",
    payload: info,
  };
};

export const educationInfoFailure = (error) => {
  return {
    type: "EDUCATION_INFO_SERVER_FAILURE",
    payload: error,
  };
};

export const fetchEducation = (token) => {
  return (dispatch) => {
    dispatch(educationInfoRequest());
    return axios
      .get(`${SERVER}/education/user`, { headers: getHeader(token) })
      .then((response) => dispatch(fetchEducationInfoSuccess(response.data)))
      .catch((error) => dispatch(educationInfoFailure(error)));
  };
};

export const addEducation = (token) => {
  return (dispatch) => {
    dispatch(educationInfoRequest());
    return axios
      .post(`${SERVER}/education/add`, {}, { headers: getHeader(token) })
      .then(() => dispatch(fetchEducation(token)))
      .catch((error) => dispatch(educationInfoFailure(error)));
  };
};

export const deleteEducation = (token, id) => {
  return (dispatch) => {
    dispatch(educationInfoRequest());
    return axios
      .delete(`${SERVER}/education/delete/${id}`, { headers: getHeader(token) })
      .then(() => dispatch(fetchEducation(token)))
      .catch((error) => dispatch(educationInfoFailure(error)));
  };
};

export const updateEducation = (token, id, payload) => {
  return (dispatch) => {
    dispatch(educationInfoRequest());
    return axios
      .put(`${SERVER}/education/update/${id}`, payload, {
        headers: getHeader(token),
      })
      .then(() => dispatch(fetchEducation(token)))
      .catch((error) => dispatch(educationInfoFailure(error)));
  };
};
