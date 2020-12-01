import { fetchUser } from "../components/Title/title.actions";

export const appInitRequest = () => {
  return {
    type: "APP_INIT_REQUEST",
  };
};

export const appInitSuccess = () => {
  return {
    type: "APP_INIT_SUCCESS",
  };
};

export const appInitFailure = (error) => {
  return {
    type: "APP_INIT_FAILURE",
    payload: error,
  };
};

export const initApp = (username) => async (dispatch) => {
  await Promise.all([dispatch(appInitRequest()), dispatch(fetchUser(username))])
    .then(dispatch(appInitSuccess()))
    .catch((err) => dispatch(appInitFailure(err)));
};
