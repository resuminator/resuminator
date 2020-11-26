/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { deleteItem, updateField } from "../actions";
const { CERTIFICATION_INFO } = require("../actionTypes");

const initialState = [
  {
    id: 0,
    name: "",
    authority: "",
    number: "",
    obtained: "",
    expires: "",
    link: "",
  },
];

const certificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CERTIFICATION_INFO.ADD: {
      return state.concat({
        id: action.id,
        name: "",
        authority: "",
        number: "",
        obtained: "",
        expires: "",
        link: "",
      });
    }
    case CERTIFICATION_INFO.UPDATE: {
      return updateField(state, action);
    }
    case CERTIFICATION_INFO.DELETE: {
      return deleteItem(state, action)
    }
    default: {
      return state;
    }
  }
};

export default certificationReducer;
