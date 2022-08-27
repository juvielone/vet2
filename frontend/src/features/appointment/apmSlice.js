import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import apmService from "./apmService"


// Initial State
const initialState = {
    appointment: [],
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: ''

}

// Create Goals
export const createAppointment = createAsyncThunk('appointment/createAppointment',
    async (apmData, thunkAPI) => {
        try {

            // Get token from another state(slice) using thunkAPI
            const token = thunkAPI.getState().auth.user.token

            return await apmService.createApm(apmData, token)

        } catch (error) {
            const message = (error.response && error.response.data &&
                error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    })


// Fetch Goals
export const getAppointments = createAsyncThunk('appointment/getAll',
    async (_, thunkAPI) => {
        try {
            // Get token from another state(slice) using thunkAPI
            const token = thunkAPI.getState().auth.user.token
            return await apmService.getApm(token)

        } catch (error) {
            const message = (error.response && error.response.data &&
                error.response.data.message) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }

    })


export const apmSlice = createSlice({
    name: 'appointment',
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
            // Create Appointments ============================================
            .addCase(createAppointment.pending, (state) => {
                state.isLoading = true

            })
            .addCase(createAppointment.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.appointment.push(action.payload)
            })

            .addCase(createAppointment.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            // Get Appointments =====================================
            .addCase(getAppointments.pending, (state) => {
                state.isLoading = true

            })
            .addCase(getAppointments.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.appointment = action.payload
            })

            .addCase(getAppointments.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

    },




})

export const { reset } = apmSlice.actions;
export default apmSlice.reducer
