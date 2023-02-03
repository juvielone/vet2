import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import apmReducer from "../features/appointment/apmSlice";
import adminReducer from "../features/admin/adminSlice";
import schedReducer from "../features/schedule/schedSlice";
import timeReducer from "../features/time/timeSlice";
import serviceReducer from "../features/service/srvSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appointment: apmReducer,
    admin: adminReducer,
    schedule: schedReducer,
    timeslot: timeReducer,
    service: serviceReducer,
  },
});
