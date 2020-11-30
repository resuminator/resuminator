import axios from "axios";
import { SERVER } from "../../utils/Server";

export const addUserInfo = (payload) => {
  return {
    type: "ADD_USERINFO",
    payload,
  };
};

export const fetchUserInfoRequest = () => {
  return {
    type: "FETCH_USERINFO_REQUEST",
  };
};

export const fetchUserInfoSuccess = (info) => {
  return {
    type: "FETCH_USERINFO_SUCCESS",
    payload: info,
  };
};

export const fetchUserInfoFailure = (error) => {
  return {
    type: "FETCH_USERINFO_FAILURE",
    payload: error,
  };
};

export const fetchUser = (username) => {
  return (dispatch) => {
    dispatch(fetchUserInfoRequest());
    return axios
      .get(`${SERVER}/users/${username}`)
      .then((response) =>
        dispatch(fetchUserInfoSuccess(response.data))
      )
      .catch((error) => dispatch(fetchUserInfoFailure(error.message)));
  };
};
