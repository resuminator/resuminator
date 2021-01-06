/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { SETTINGS } from "../actionTypes";

const initialState = {
  loading: "",
  error: "",
  _id: "",
  uid: "",
  skill_display: "categories",
  modules: {
    left: [],
    right: []
  }
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETTINGS.UPDATE_STATE: {
      return { ...state, ...action.payload };
    }
    case SETTINGS.SERVER_REQUEST: {
      return { ...state, loading: true };
    }
    case SETTINGS.FETCH_SUCCESS: {
      return {
        ...state,
        _id: action.payload._id,
        uid: action.payload.uid,
        skill_display: action.payload.skill_display,
        modules: action.payload.modules,
        loading: false,
      };
    }
    case SETTINGS.SERVER_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    default: {
      return state;
    }
  }
};
