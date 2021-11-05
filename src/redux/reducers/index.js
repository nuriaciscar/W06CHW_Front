import robotsReducer from "./toDoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  robots: robotsReducer,
});

export default rootReducer;