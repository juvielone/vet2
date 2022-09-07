import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import adminService from "./adminService"

const initialState = {
    users: [],
    appointments: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Fetch Users
export const getUsers = createAsyncThunk('admin/getUsers',
    async (_, thunkAPI) => {
        try {

            return await adminService.getUsers()

        } catch (error) {
            const message = (error.response && error.response.data &&
                error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }

    })



// Fetch Appointment
export const getAppointments = createAsyncThunk('appointment/getAll',
    async (_, thunkAPI) => {
        try {

            return await adminService.getAppointments()

        } catch (error) {
            const message = (error.response && error.response.data &&
                error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }

    })


export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            // Get Users =====================================
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true

            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.users = action.payload
            })

            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            // Get All Appointments
            // Get Appointments =====================================
            .addCase(getAppointments.pending, (state) => {
                state.isLoading = true

            })
            .addCase(getAppointments.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.appointments = action.payload
            })

            .addCase(getAppointments.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
})


export const { reset } = adminSlice.actions
export default adminSlice.reducer