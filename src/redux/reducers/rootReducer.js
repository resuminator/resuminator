import { combineReducers } from "redux";
import experienceReducer from "./experienceReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userInfo: userReducer,
  experienceInfo: experienceReducer
});

export default rootReducer;
