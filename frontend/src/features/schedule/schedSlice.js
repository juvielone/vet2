import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import schedService from "./schedService";

// Initial State
const initialState = {
  schedule: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};

// Create Schedule
export const createSchedule = createAsyncThunk(
  "schedule/createSchedule",
  async (apmData, thunkAPI) => {
    try {
      return await schedService.createSched(apmData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update Schedule
export const updateSchedules = createAsyncThunk(
  "schedule/update",
  async (apmData, thunkAPI) => {
    try {
      return await schedService.updateSchedule(apmData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Fetch Schedule
export const getSchedules = createAsyncThunk(
  "schedule/getAll",
  async (userEmail, thunkAPI) => {
    try {
      return await schedService.getSched(userEmail);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const schedSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Schedules ============================================
      .addCase(createSchedule.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSchedule.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.schedule.push(action.payload);
      })

      .addCase(createSchedule.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Get Schedules =====================================
      .addCase(getSchedules.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSchedules.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.schedule = action.payload;
      })

      .addCase(getSchedules.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Update Schedules =====================================
      .addCase(updateSchedules.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSchedules.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.schedule = action.payload;
      })

      .addCase(updateSchedules.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = schedSlice.actions;
export default schedSlice.reducer;
