import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Service/CounterSlice";
export const store = configureStore({
  reducer: { cart: CounterSlice }
});
