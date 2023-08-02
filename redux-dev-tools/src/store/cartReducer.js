import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialCartState = { cartItems: [] };

const cart = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItems(state, actions) {
      if (Array.isArray(actions.payload)) {
        state.cartItems = actions.payload;
      } else {
        const index = state.cartItems.findIndex(
          (item) => item.id === actions.payload.id
        );
        const item = state.cartItems[index];
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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sendind cart Data!",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-http-7ab92-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error(res.error);
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart Data successfuly!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Errorr!",
          message: "Something went wrong!",
        })
      );
    }
  };
};

export const cartActions = cart.actions;

export default cart.reducer;
