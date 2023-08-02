import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "ui",
  initialState: { isCartOpen: false, notification: null },
  reducers: {
    cartActiveState(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    showNotification(state, actions) {
      state.notification = {
        status: actions.payload.status,
        title: actions.payload.title,
        message: actions.payload.message,
      };
    },
  },
});

export const uiActions = ui.actions;

export default ui.reducer;
