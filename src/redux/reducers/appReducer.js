/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { APP } from "../actionTypes";

const initialState = {
  init: false,
  loading: false,
  error: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP.INIT_REQUEST: {
      return { ...state, loading: true };
    }
    case APP.INIT_SUCCESS: {
      return { ...state, loading: false, init: true };
    }
    case APP.INIT_FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
