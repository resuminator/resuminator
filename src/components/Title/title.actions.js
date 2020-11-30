export const addUserInfo = (payload) => {
  return {
    type: "ADD_USERINFO",
    payload,
  };
};

export const fetchUserInfoRequest = () => {
  return {
    type: 'FETCH_USERINFO_REQUEST'
  }
}

export const fetchUserInfoSuccess = (info) => {
  return {
    type: 'FETCH_USERINFO_REQUEST',
    payload: info
  }
}

export const fetchUserInfoFailure = (error) => {
  return {
    type: 'FETCH_USERINFO_REQUEST',
    payload: error
  }
}