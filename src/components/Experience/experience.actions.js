import axios from "axios";
import { SERVER } from "../../utils/Server";

export const deleteExperienceById = (id) => {
  return {
    type: "DELETE_EXPERIENCE_INFO",
    id,
  };
};

export const updateExperienceById = (payload) => {
  return {
    type: "UPDATE_EXPERIENCE_INFO",
    payload,
  };
};

export const fetchExperienceInfoRequest = () => {
  return {
    type: "FETCH_EXPERIENCE_INFO_REQUEST",
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

export const addExperienceInfoRequest = () => {
  return {
    type: "ADD_EXPERIENCE_INFO_REQUEST",
  };
};

export const addExperienceInfoSuccess = () => {
  return {
    type: "ADD_EXPERIENCE_INFO_SUCCESS",
  };
};

export const addExperienceInfoFailure = (error) => {
  return {
    type: "ADD_EXPERIENCE_INFO_FAILURE",
    payload: error,
  };
};

export const deleteExperienceInfoRequest = () => {
  return {
    type: "DELETE_EXPERIENCE_INFO_REQUEST",
  };
};

export const deleteExperienceInfoSuccess = () => {
  return {
    type: "DELETE_EXPERIENCE_INFO_SUCCESS",
  };
};

export const deleteExperienceInfoFailure = (error) => {
  return {
    type: "DELETE_EXPERIENCE_INFO_FAILURE",
    payload: error,
  };
};

export const fetchExperience = (username) => {
  return (dispatch) => {
    dispatch(fetchExperienceInfoRequest());
    return axios
      .get(`${SERVER}/experience/user/${username}`)
      .then((response) => dispatch(fetchExperienceInfoSuccess(response.data)))
      .catch((error) => dispatch(fetchExperienceInfoFailure(error.message)));
  };
};

export const addExperience = (username) => {
  return (dispatch) => {
    dispatch(addExperienceInfoRequest());
    return axios
      .post(`${SERVER}/experience/add`, { username })
      .then(() => dispatch(fetchExperience(username)))
      .catch((error) => dispatch(addExperienceInfoFailure(error)));
  };
};

export const deleteExperience = (username, id) => {
  return (dispatch) => {
    dispatch(deleteExperienceInfoRequest());
    return axios
      .delete(`${SERVER}/experience/delete/${id}`)
      .then(() => dispatch(fetchExperience(username)))
      .catch((error) => dispatch(deleteExperienceInfoFailure(error)));
  };
};
