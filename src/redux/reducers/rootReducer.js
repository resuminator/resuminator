import { combineReducers } from "redux";
import certificationReducer from "./certificationReducer";
import educationReducer from "./educationReducer";
import experienceReducer from "./experienceReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userInfo: userReducer,
  experienceInfo: experienceReducer,
  educationInfo: educationReducer,
  certificationInfo: certificationReducer,
});

export default rootReducer;
