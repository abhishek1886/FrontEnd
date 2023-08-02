import { createSlice } from "@reduxjs/toolkit";
import { useImperativeHandle } from "react";

const initialCartState = { isCartOpen: false, cartItems: [] };

const cart = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    cartActiveState(state) {
      state.isCartOpen = !state.isCartOpen;
    },

    addItems(state, actions) {
      const index = state.cartItems.findIndex(
        (item) => item.id === actions.payload.id
      );
      const item = state.cartItems[index];
      console.log(item);
      if (item) {
        const updatedExistingCartItem = {
          ...item,
          quantity: item.quantity + 1,
        };
        const updatedCartItems = state.cartItems;
        updatedCartItems[index] = updatedExistingCartItem;

        state.cartItems = updatedCartItems;
      } else {
        const addedCartItem = { ...actions.payload, quantity: 1 };
        state.cartItems = [addedCartItem, ...state.cartItems];
      }
    },

    removeItems(state, actions) {
      const index = state.cartItems.findIndex(
        (item) => item.id === actions.payload
      );
      const existingItem = state.cartItems[index];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      if (updatedItem.quantity === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== actions.payload
        );
      } else {
        const updatedCartData = state.cartItems;
        updatedCartData[index] = updatedItem;

        state.cartItems = updatedCartData;
      }
    },
  },
});

export const cartActions = cart.actions;

export default cart.reducer;
