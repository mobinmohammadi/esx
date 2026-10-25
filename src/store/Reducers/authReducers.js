import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from './../../api/api';


export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        console.log('info ==>', info);

        try {
            const { data } = await api.post('/admin-login', info, {
                withCredentials: true
            })
            localStorage.setItem("accessToken", data.token)

            console.log('data ==> ', data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log("error ===> ", error.response.data)
            return rejectWithValue(error.response.data)

        }
    }
)
export const seller_register = createAsyncThunk(
    'auth/seller_register',
    async (info, { rejectWithValue, fulfillWithValue }) => {

        try {
            console.log("info ===> ", info);

            const { data } = await api.post('/seller-register', info, {
                withCredentials: true
            })
            // localStorage.setItem("accessToken", data.token)

            console.log('data ==> ', data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)

        }
    }
)

export const seller_login = createAsyncThunk(
    'auth/seller_login',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {

            const { data } = await api.post("/seller-login", info, {
                withCredentials: true
            })
            console.log("login Data ===> ", data);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }

    }
)


export const authReducer = createSlice({
    name: "auth",
    initialState: {
        successMessage: "",
        errorMessage: "",
        loader: false,
        userInfo: ""
    },

    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(admin_login.pending, (state) => {

                state.loader = true
            })
            .addCase(admin_login.fulfilled, (state) => {

                state.loader = false
                state.successMessage = `welcom sir ${state.userInfo.name}`

            })
            .addCase(admin_login.rejected, (state, { payload }) => {

                state.loader = false
                state.errorMessage = payload.error
            })

            .addCase(seller_register.pending, (state) => {

                state.loader = true
            })
            .addCase(seller_register.fulfilled, (state) => {

                state.loader = false
                state.successMessage = `SuccucssFully Register`

            })
            .addCase(seller_register.rejected, (state, { payload }) => {

                state.loader = false
                state.errorMessage = payload.error
            })
    }

})


export const { messageClear } = authReducer.actions
export default authReducer.reducer