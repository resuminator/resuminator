import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userInfo: userReducer,
});

export default rootReducer;
