/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { USERINFO } from "../actionTypes";

const initialState = {
  name: "",
  jobTitle: "",
  loading: false,
  username: "",
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERINFO.ADD: {
      const { name, jobTitle } = action.payload;
      return {
        ...state,
        name,
        jobTitle,
      };
    }
    case USERINFO.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case USERINFO.FETCH_SUCCESS: {
      return {
        error: '',
        name: action.payload.name,
        jobTitle: action.payload.jobTitle,
        username: action.payload.username,
        loading: false,
      };
    }
    case USERINFO.FETCH_ERROR: {
      return { ...state, username: "", error: action.payload, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
