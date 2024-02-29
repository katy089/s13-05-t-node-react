import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice,    
  },
});

console.log('Estado actual de Redux:', store.getState());