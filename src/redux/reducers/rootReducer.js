/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { combineReducers } from "redux";
import certificationReducer from "./certificationReducer";
import educationReducer from "./educationReducer";
import experienceReducer from "./experienceReducer";
import projectReducer from "./projectReducer";
import { propertiesReducer } from "./propertiesReducer";
import { skillsReducer } from "./skillReducer";
import userReducer from "./userReducer";
import { viewReducer } from "./viewReducer";

const rootReducer = combineReducers({
  userInfo: userReducer,
  experienceInfo: experienceReducer,
  educationInfo: educationReducer,
  certificationInfo: certificationReducer,
  projectInfo: projectReducer,
  skillInfo: skillsReducer,
  properties: propertiesReducer,
  view: viewReducer
});

export default rootReducer;
