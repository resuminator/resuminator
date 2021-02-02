/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

const { ACHIEVEMENT_INFO } = require("../actionTypes");

const initialState = { loading: false, error: "", _id: "", description: "" };

const achievementReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACHIEVEMENT_INFO.UPDATE_STATE: {
      return { ...state, description: action.payload };
    }
    case ACHIEVEMENT_INFO.SERVER_REQUEST: {
      return { ...state, loading: true };
    }
    case ACHIEVEMENT_INFO.FETCH_SUCCESS: {
      return {
        ...state,
        error: "",
        loading: false,
        _id: action.payload._id,
        description: action.payload.description,
      };
    }
    case ACHIEVEMENT_INFO.SERVER_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default achievementReducer;
