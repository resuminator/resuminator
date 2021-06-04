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

export const updateSkillInfoState = (payload) => {
  return { type: "UPDATE_SKILL_INFO_STATE", payload };
};

export const deleteSkillById = (id) => {
  return { type: "DELETE_SKILL_INFO", id };
};

export const switchDisplayType = (payload) => {
  return { type: "SWITCH_DISPLAY_TYPE", payload };
};

export const skillInfoRequest = () => {
  return { type: "SKILL_INFO_SERVER_REQUEST" };
};

export const fetchSkillInfoSuccess = (info) => {
  return { type: "FETCH_SKILL_INFO_SUCCESS", payload: info };
};

export const fetchSkillInfoFailure = (error) => {
  return {
    type: "SKILL_INFO_SERVER_FAILURE",
    payload: error,
  };
};

export const fetchSkills = (token) => {
  return (dispatch) => {
    dispatch(skillInfoRequest());
    return axios
      .get(`${SERVER}/skills/user`, { headers: getHeader(token) })
      .then((response) => {
        axios
          .post(
            `${SERVER}/skillset/fetchbyids`,
            {
              skills: response.data[0].skills,
            },
            { headers: getHeader(token) }
          )
          .then((response) => {
            dispatch(fetchSkillInfoSuccess(response.data));
          });
      })
      .catch((error) => dispatch(fetchSkillInfoFailure(error.message)));
  };
};

export const fetchInDatabase = async (token, name) => {
  return axios
    .post(
      `${SERVER}/skillset/fetchbyname`,
      { name },
      { headers: getHeader(token) }
    )
    .then((response) => response.data)
    .catch((err) => err);
};

export const createNewSkillDocument = async (token) => {
  return axios
    .post(`${SERVER}/skills/add`, {}, { headers: getHeader(token) })
    .then((response) => response.data)
    .catch((err) => err.message);
};

export const addUserSkill = async (token, skillId) => {
  return axios
    .put(`${SERVER}/skills/add/${skillId}`, {}, { headers: getHeader(token) })
    .then((response) => response.data)
    .catch((err) => err.message);
};

export const deleteUserSkill = async (token, skillId) => {
  return axios
    .put(
      `${SERVER}/skills/delete/${skillId}`,
      {},
      { headers: getHeader(token) }
    )
    .then((response) => response.data)
    .catch((err) => err.message);
};

export const addSkillToDatabase = async (token, name, category, commonAbbr) => {
  return axios
    .post(
      `${SERVER}/skillset/add`,
      { name, category, commonAbbr },
      { headers: getHeader(token) }
    )
    .then((response) => response.data)
    .catch((err) => err.message);
};