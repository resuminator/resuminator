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

export const fetchSkills = (uid) => {
  return (dispatch) => {
    dispatch(skillInfoRequest());
    return axios
      .get(`${SERVER}/skills/user/${uid}`)
      .then((response) => {
        axios
          .post(`${SERVER}/skillset/fetchbyids`, {
            skills: response.data[0].skills,
          })
          .then((response) => {
            dispatch(fetchSkillInfoSuccess(response.data));
          });
      })
      .catch((error) => dispatch(fetchSkillInfoFailure(error.message)));
  };
};

export const fetchInDatabase = async (name) => {
  return axios
    .get(`${SERVER}/skillset/fetchbyname/${name}`)
    .then((response) => response.data)
    .catch((err) => err.message);
};

export const createNewSkillDocument = async (uid) => {
  return axios
    .post(`${SERVER}/skills/add`, { uid })
    .then((response) => response.data)
    .catch((err) => err.message);
}

export const addUserSkill = async (uid, skillId) => {
  return axios
    .put(`${SERVER}/skills/add/${skillId}`, { uid })
    .then((response) => response.data)
    .catch((err) => err.message);
};

export const deleteUserSkill = async (uid, skillId) => {
  return axios
    .put(`${SERVER}/skills/delete/${skillId}`, { uid })
    .then((response) => response.data)
    .catch((err) => err.message);
};

export const addSkillToDatabase = async (name, category, commonAbbr) => {
  return axios
    .post(`${SERVER}/skillset/add`, { name, category, commonAbbr })
    .then((response) => response.data)
    .catch((err) => err.message);
};
