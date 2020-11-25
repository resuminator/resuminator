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
    jobtitle: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERINFO.ADD: {
      const { name, jobtitle } = action.payload;
      return {
        ...state,
        name, 
        jobtitle,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
