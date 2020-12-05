import axios from "axios";
import { SERVER } from "../../utils/Server";
import { findNextId } from "../../utils/Helpers";

export const addExperience = (array) => {
  return {
    type: "ADD_EXPERIENCE_INFO",
    id: findNextId(array),
  };
};

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

export const fetchExperience = (username) => {
  return (dispatch) => {
    dispatch(fetchExperienceInfoRequest());
    return axios
      .get(`${SERVER}/experience/user/${username}`)
      .then((response) =>
        dispatch(fetchExperienceInfoSuccess(response.data))
      )
      .catch((error) => dispatch(fetchExperienceInfoFailure(error.message)));
  };
};