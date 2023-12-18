import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  quantity: 0
};

export const CounterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isexisted = state.cartItems.find((item) => item.id === payload.id);
      if (isexisted) {
        return state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
        state.totalAmount += payload.price;
        state.quantity++;
      }
    },
    removeToCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id != payload.id);
      state.totalAmount -= payload.price;
      state.quantity--;
    },

    increaseQty: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.quantity++;
      state.totalAmount += payload.price;
    },
    decreaseQty: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      state.quantity--;
      state.totalAmount -= payload.price;
    }
  }
});

export const { addToCart, removeToCart, increaseQty, decreaseQty } =
  CounterSlice.actions;
export default CounterSlice.reducer;
