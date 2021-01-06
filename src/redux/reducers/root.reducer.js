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
import { appReducer } from "./app.reducer";
import certificationReducer from "./certification.reducer";
import educationReducer from "./education.reducer";
import experienceReducer from "./experience.reducer";
import projectReducer from "./project.reducer";
import { settingsReducer } from "./settings.reducer";
import { skillsReducer } from "./skill.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  userInfo: userReducer,
  experienceInfo: experienceReducer,
  educationInfo: educationReducer,
  certificationInfo: certificationReducer,
  projectInfo: projectReducer,
  skillInfo: skillsReducer,
  settings: settingsReducer,
  app: appReducer,
});

export default rootReducer;
