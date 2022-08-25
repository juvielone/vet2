import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import apmReducer from '../features/appointment/apmSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appointment: apmReducer
  },
});
