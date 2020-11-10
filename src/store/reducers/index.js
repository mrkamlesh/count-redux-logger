import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";

const appReducer = combineReducers({count: counterReducer});

export default appReducer;
