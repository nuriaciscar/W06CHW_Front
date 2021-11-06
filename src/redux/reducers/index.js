import robotsReducer from "./robotsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  robots: robotsReducer,
});

export default rootReducer;
