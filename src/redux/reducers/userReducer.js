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
  _id: "",
  name: "",
  jobTitle: "",
  loading: false,
  username: "",
  error: "",
  contact: {
    email: "",
    linkedin: "",
    twitter: "",
    github: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERINFO.ADD: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case USERINFO.UPDATE_CONTACT: {
      return {...state, contact: action.payload}
    }
    case USERINFO.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case USERINFO.FETCH_SUCCESS: {
      return {
        ...state,
        error: "",
        _id: action.payload._id,
        name: action.payload.name,
        jobTitle: action.payload.jobTitle,
        username: action.payload.username,
        contact: action.payload.contact,
        loading: false,
      };
    }
    case USERINFO.FETCH_ERROR: {
      return { ...state, username: "", error: action.payload, loading: false };
    }
    case USERINFO.UPDATE_ERROR: {
      return {...state, loading: false, error: action.payload}
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
