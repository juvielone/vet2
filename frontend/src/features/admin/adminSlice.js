import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminService";
// Get user from localStorage
const adminUser = JSON.parse(localStorage.getItem("adminUser"));

const initialState = {
  adminUser: adminUser ? adminUser : null,
  users: [],
  oneUser: null,
  appointments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Fetch Users
export const getUsers = createAsyncThunk(
  "admin/getUsers",
  async (_, thunkAPI) => {
    try {
      return await adminService.getUsers();
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

// Fetch One User
export const getOne = createAsyncThunk(
  "admin/getOne",
  async (email, thunkAPI) => {
    try {
      return await adminService.getOne(email);
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

// Delete user and it's appointment
export const deleteUser = createAsyncThunk(
  "userOne/delete",
  async (id, thunkAPI) => {
    try {
      return await adminService.deleteUser(id);
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

// Fetch Appointment
export const getAppointments = createAsyncThunk(
  "appointment/getAll",
  async (_, thunkAPI) => {
    try {
      return await adminService.getAppointments();
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

// Create Appointment
export const addAppointments = createAsyncThunk(
  "appointment/addApm",
  async (apmData, thunkAPI) => {
    try {
      return await adminService.createApm(apmData);
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

// Update Appointment
export const updateAppointment = createAsyncThunk(
  "appointment/update",
  async (apmData, thunkAPI) => {
    try {
      return await adminService.updateAppointment(apmData);
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

// Login Admin
// Login
export const loginAdmin = createAsyncThunk(
  "admin/login",
  async (user, thunkAPI) => {
    try {
      return await adminService.loginAdmin(user);
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

//  Admin Logout
export const logout = createAsyncThunk("admin/logout", async (_, thunkAPI) => {
  try {
    await adminService.logoutAdmin();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const adminSlice = createSlice({
  name: "admin",
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
      // Get Users =====================================
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })

      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Get One User =====================================
      .addCase(getOne.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOne.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.oneUser = action.payload;
      })

      .addCase(getOne.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Delete User =====================================
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = state.users.filter(
          (user) => user._id !== action.payload.id
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Get All Appointments
      // Get Appointments =====================================
      .addCase(getAppointments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.appointments = action.payload;
      })

      .addCase(getAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      //
      // Add Appointments =====================================
      .addCase(addAppointments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.appointments.push(action.payload);
      })

      .addCase(addAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Get Appointments =====================================
      .addCase(updateAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.appointments = action.payload;
      })

      .addCase(updateAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Login
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.adminUser = action.payload;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.adminUser = null;
      })

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.adminUser = null;
      });
  },
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;
