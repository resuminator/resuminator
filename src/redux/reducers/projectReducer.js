/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { deleteItem, updateField } from "../utils";
const { PROJECT_INFO } = require("../actionTypes");

const initialState = [
  {
    id: 0,
    projectTitle: "",
    description: ``,
    projectLink: "",
  },
];

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_INFO.ADD: {
      return state.concat({
        id: action.id,
        projectTitle: "",
        description: ``,
        projectLink: "",
      });
    }
    case PROJECT_INFO.UPDATE: {
      return updateField(state, action);
    }
    case PROJECT_INFO.DELETE: {
      return deleteItem(state, action);
    }
    default: {
      return state;
    }
  }
};

export default projectReducer;
