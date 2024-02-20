import { configureStore } from '@reduxjs/toolkit';
import loaderSlice from './loaderSlice';
import loginSlice from './loginSlice';

export const store = configureStore({
  reducer: {
    loader: loaderSlice,
    user: loginSlice,    
  },
});
