/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { fetchEducation } from "../components/Education/education.actions";
import { fetchExperience } from "../components/Experience/experience.actions";
import { fetchProject } from "../components/Projects/project.actions";
import { fetchUser } from "../components/Title/title.actions";

export const appInitRequest = () => {
  return {
    type: "APP_INIT_REQUEST",
  };
};

export const appInitSuccess = () => {
  return {
    type: "APP_INIT_SUCCESS",
  };
};

export const appInitFailure = (error) => {
  return {
    type: "APP_INIT_FAILURE",
    payload: error,
  };
};

export const initApp = (username) => async (dispatch) => {
  await Promise.all([
    dispatch(appInitRequest()),
    dispatch(fetchUser(username)),
    dispatch(fetchExperience(username)),
    dispatch(fetchEducation(username)),
    dispatch(fetchProject(username))
  ])
    .then(() => {
      dispatch(appInitSuccess());
    })
    .catch((err) => dispatch(appInitFailure(err)));
};
