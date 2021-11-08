import robotsReducer from "./robotsReducer";
import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
  userReducer,
});

export default rootReducer;
