import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
