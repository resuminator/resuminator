import { combineReducers } from "redux";
import educationReducer from "./educationReducer";
import experienceReducer from "./experienceReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userInfo: userReducer,
  experienceInfo: experienceReducer,
  educationInfo: educationReducer
});

export default rootReducer;
