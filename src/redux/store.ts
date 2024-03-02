import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import storeSlice from "./slices/storeSlice";

export const store = configureStore({
  reducer: {
    cartSlice,
    storeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
