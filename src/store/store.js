import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'
import appReducer from "./reducers";


const store = createStore(
    appReducer,
    applyMiddleware(logger)
  )

// const store = createStore(appReducer);
export default store;
