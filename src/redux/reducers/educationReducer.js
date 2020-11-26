/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { updateField } from "../actions";
const { EDUCATION_INFO } = require("../actionTypes");

const initialState = [
  {
    id: 0,
    institute: "",
    location: "",
    degree: "",
    stream: "",
    grade: 0.0,
    total: 0.0,
    start: "",
    end: "",
    description: ``,
  },
];

const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDUCATION_INFO.ADD: {
      return state.concat({
        id: action.id,
        institute: "",
        location: "",
        degree: "",
        stream: "",
        grade: "",
        total: "",
        start: "",
        end: "",
        description: ``,
      });
    }
    case EDUCATION_INFO.UPDATE: {
      return updateField(state, action);
    }
    default: {
      return state;
    }
  }
};

export default educationReducer;
