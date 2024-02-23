import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
});
