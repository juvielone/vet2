import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import srvService from "./srvService";

const initialState = {
  service: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create Service
export const createSrv = createAsyncThunk(
  "service/createService",
  async (apmData, thunkAPI) => {
    try {
      return await srvService.createService(apmData);
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
export const getAllSrv = createAsyncThunk(
  "service/getAll",
  async (_, thunkAPI) => {
    try {
      return await srvService.getAllService();
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

// Update Service
export const updateSrv = createAsyncThunk(
  "service/update",
  async (srvData, thunkAPI) => {
    try {
      return await srvService.updateService(srvData);
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

// Delete service
export const deleteSrv = createAsyncThunk(
  "service/delete",
  async (srvId, thunkAPI) => {
    try {
      return await srvService.deleteService(srvId);
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

export const srvSlice = createSlice({
  name: "service",
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
      // Create Service ============================================
      .addCase(createSrv.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSrv.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.service.push(action.payload);
      })

      .addCase(createSrv.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Get TimeSlot =====================================
      .addCase(getAllSrv.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSrv.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.service = action.payload;
      })

      .addCase(getAllSrv.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Update TimeSlot =====================================
      .addCase(updateSrv.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSrv.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.service = action.payload;
      })

      .addCase(updateSrv.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //   Delete TimeSlot  =====================================
      .addCase(deleteSrv.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSrv.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.service = state.service.filter(
          (srv) => srv._id !== action.payload.id
        );
      })

      .addCase(deleteSrv.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = srvSlice.actions;
export default srvSlice.reducer;
