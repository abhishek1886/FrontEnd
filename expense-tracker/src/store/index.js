import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import expensesReducer from "./expenses";

const rootReducer = combineReducers({
  auth: authReducer,
  expenses: expensesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
