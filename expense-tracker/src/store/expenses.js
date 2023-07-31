import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const expense = axios.create({
  baseURL: "https://expense-tracker-d9bd4-default-rtdb.firebaseio.com/expenses"
})

const initialExpensesState = { expenses: [] };

const expenses = createSlice({
  name: "expenses",
  initialState: initialExpensesState,
  reducers: {
    addExpense(state, action) {
      state.expenses = [action.payload, ...state.expenses];
    },
    deleteExpense(state, action) {
      const { id, _id, email } = action.payload;
      state.expenses = state.expenses.filter(data => data.id !== id);
    
      expense.delete(`/${email}/${_id}.json`).catch(err => err.message);

    },
    addEditedExpense(state, action) {
      state.expenses = action.payload;
    }
  },
});

export const expenseActions = expenses.actions;

export default expenses.reducer;
