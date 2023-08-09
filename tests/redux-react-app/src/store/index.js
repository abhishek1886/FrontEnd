import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth";
import counterReducer from "./counter";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
