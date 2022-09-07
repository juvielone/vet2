import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import apmReducer from '../features/appointment/apmSlice';
import adminReducer from '../features/admin/adminSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appointment: apmReducer,
    admin: adminReducer
  },
});
