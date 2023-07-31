import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import expensesReducer from "./expenses";
import themeReduce from "./themeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  expenses: expensesReducer,
  theme: themeReduce
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
