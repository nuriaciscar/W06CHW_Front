import robotsReducer from "./robotsReducer";
import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
  user: userReducer,
});

export default rootReducer;
