import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import timeService from "./timeService";

const initialState = {
  time: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create TimeSlot
export const createTimeSlot = createAsyncThunk(
  "time/createTimeSlot",
  async (apmData, thunkAPI) => {
    try {
      return await timeService.createTimeSlot(apmData);
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

// Create Default TimeSlot
export const createDefaultSlot = createAsyncThunk(
  "time/createDefTimeSlot",
  async (dateSlot, thunkAPI) => {
    try {
      return await timeService.createDefaultSlot(dateSlot);
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

// Fetch All TimeSlot
export const getTimeSlot = createAsyncThunk(
  "time/getAll",
  async (_, thunkAPI) => {
    try {
      return await timeService.getAllTimeSlots();
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

// Update Time
export const updateTimeSlot = createAsyncThunk(
  "time/update",
  async (timeData, thunkAPI) => {
    try {
      return await timeService.updateTimeSlot(timeData);
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

// Delete Time
export const deleteTimeSlot = createAsyncThunk(
  "time/delete",
  async (timeId, thunkAPI) => {
    try {
      return await timeService.deleteTimeSlot(timeId);
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

export const timeSlice = createSlice({
  name: "time",
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
      // Create TimeSlot ============================================
      .addCase(createTimeSlot.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTimeSlot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.time.push(action.payload);
      })

      .addCase(createTimeSlot.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Create Def Slot ============================================
      .addCase(createDefaultSlot.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDefaultSlot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.time.push(action.payload);
      })

      .addCase(createDefaultSlot.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Get TimeSlot =====================================
      .addCase(getTimeSlot.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTimeSlot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.time = action.payload;
      })

      .addCase(getTimeSlot.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Update TimeSlot =====================================
      .addCase(updateTimeSlot.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTimeSlot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.time = state.time.map((apmTime) =>
          apmTime._id === action.payload._id ? action.payload : apmTime
        );
      })

      .addCase(updateTimeSlot.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //   Delete TimeSlot  =====================================
      .addCase(deleteTimeSlot.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTimeSlot.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.time = state.time.filter(
          (time) => time._id !== action.payload.id
        );
      })

      .addCase(deleteTimeSlot.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = timeSlice.actions;
export default timeSlice.reducer;
