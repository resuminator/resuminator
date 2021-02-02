import axios from "axios";
import { SERVER } from "../../utils/Server";

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

export const fetchAchievement = (uid) => {
  return (dispatch) => {
    dispatch(achievementInfoRequest());
    return axios
      .get(`${SERVER}/achievement/user/${uid}`)
      .then((response) => dispatch(fetchAchievementInfoSuccess(response.data)))
      .catch((error) => dispatch(achievementInfoFailure(error)));
  };
};

export const addAchievement = (uid) => {
  return (dispatch) => {
    dispatch(achievementInfoRequest());
    return axios
      .post(`${SERVER}/achievement/add`, { uid })
      .then(() => dispatch(fetchAchievement(uid)))
      .catch((error) => dispatch(achievementInfoFailure(error)));
  };
};

export const updateAchievement = (uid, id, payload) => {
  return (dispatch) => {
    dispatch(achievementInfoRequest());
    return axios
      .put(`${SERVER}/achievement/update/${id}`, { payload })
      .then(() => dispatch(fetchAchievement(uid)))
      .catch((error) => dispatch(achievementInfoFailure(error)));
  };
};
