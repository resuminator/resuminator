/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

const { EXPERIENCE_INFO } = require("../actionTypes");

const initialState = {
  showTags: true,
  loading: false,
  experiences: [
    {
      _id: 0,
      jobTitle: "",
      company: "",
      start: "",
      end: "",
      location: "",
      description: ``,
      workLink: "",
    },
  ],
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPERIENCE_INFO.UPDATE: {
      return {...state, experiences: action.payload};
    }
    case EXPERIENCE_INFO.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case EXPERIENCE_INFO.FETCH_SUCCESS: {
      return {
        ...state,
        experiences: action.payload,
        loading: false,
      };
    }
    case EXPERIENCE_INFO.FETCH_ERROR: {
      return { ...state, username: "", error: action.payload, loading: false };
    }
    case EXPERIENCE_INFO.ADD_REQUEST: {
      return {...state, loading: true}
    }
    case EXPERIENCE_INFO.ADD_ERROR: {
      return { ...state, loading: false, error: action.payload }
    }
    case EXPERIENCE_INFO.DELETE_REQUEST: {
      return {...state, loading: true};
    }
    case EXPERIENCE_INFO.DELETE_ERROR: {
      return {...state, loading: false, error: action.payload}
    }
    case EXPERIENCE_INFO.UPDATE_REQUEST: {
      return {...state, loading: true};
    }
    case EXPERIENCE_INFO.UPDATE_ERROR: {
      return {...state, loading: false, error: action.payload}
    }
    default: {
      return state;
    }
  }
};

export default experienceReducer;
