/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
export default createStore(rootReducer, composedEnhancer);
