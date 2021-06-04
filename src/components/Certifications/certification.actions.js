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

export const updateCertificationState = (payload) => {
  return {
    type: "UPDATE_CERTIFICATION_INFO_STATE",
    payload,
  };
};

export const certificationInfoRequest = () => {
  return {
    type: "CERTIFICATION_INFO_SERVER_REQUEST",
  };
};

export const fetchCertificationInfoSuccess = (info) => {
  return {
    type: "FETCH_CERTIFICATION_INFO_SUCCESS",
    payload: info,
  };
};

export const certificationInfoFailure = (error) => {
  return {
    type: "CERTIFICATION_INFO_SERVER_FAILURE",
    payload: error,
  };
};

export const fetchCertification = (token) => {
  return (dispatch) => {
    dispatch(certificationInfoRequest());
    return axios
      .get(`${SERVER}/certification/user`, { headers: getHeader(token) })
      .then((response) =>
        dispatch(fetchCertificationInfoSuccess(response.data))
      )
      .catch((error) => dispatch(certificationInfoFailure(error)));
  };
};

export const addCertification = (token) => {
  return (dispatch) => {
    dispatch(certificationInfoRequest());
    return axios
      .post(`${SERVER}/certification/add`, {}, { headers: getHeader(token) })
      .then(() => dispatch(fetchCertification(token)))
      .catch((error) => dispatch(certificationInfoFailure(error)));
  };
};

export const deleteCertification = (token, id) => {
  return (dispatch) => {
    dispatch(certificationInfoRequest());
    return axios
      .delete(`${SERVER}/certification/delete/${id}`, {
        headers: getHeader(token),
      })
      .then(() => dispatch(fetchCertification(token)))
      .catch((error) => dispatch(certificationInfoFailure(error)));
  };
};

export const updateCertification = (token, id, payload) => {
  return (dispatch) => {
    dispatch(certificationInfoRequest());
    return axios
      .put(`${SERVER}/certification/update/${id}`, payload, {
        headers: getHeader(token),
      })
      .then(() => dispatch(fetchCertification(token)))
      .catch((error) => dispatch(certificationInfoFailure(error)));
  };
};
