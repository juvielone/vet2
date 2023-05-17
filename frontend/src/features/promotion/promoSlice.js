import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import promoService from "./promoService";

const initialState = {
  promotion: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create Promotion
export const createPromo = createAsyncThunk(
  "promo/create",
  async (apmData, thunkAPI) => {
    try {
      return await promoService.createPromo(apmData);
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

// Fetch All Promotions
export const getAllPromo = createAsyncThunk(
  "promo/getAll",
  async (_, thunkAPI) => {
    try {
      return await promoService.getAllPromo();
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
export const updatePromo = createAsyncThunk(
  "promo/update",
  async (srvData, thunkAPI) => {
    try {
      return await promoService.updatePromo(srvData);
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
export const deletePromo = createAsyncThunk(
  "promo/delete",
  async (srvId, thunkAPI) => {
    try {
      return await promoService.deletePromo(srvId);
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

export const promoSlice = createSlice({
  name: "promotions",
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
      .addCase(createPromo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPromo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.promotion.push(action.payload);
      })

      .addCase(createPromo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Get TimeSlot =====================================
      .addCase(getAllPromo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPromo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.promotion = action.payload;
      })

      .addCase(getAllPromo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Update TimeSlot =====================================
      .addCase(updatePromo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePromo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.promotion = action.payload;
      })

      .addCase(updatePromo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //   Delete TimeSlot  =====================================
      .addCase(deletePromo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePromo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.promotion = state.promotion.filter(
          (srv) => srv._id !== action.payload.id
        );
      })

      .addCase(deletePromo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = promoSlice.actions;
export default promoSlice.reducer;
