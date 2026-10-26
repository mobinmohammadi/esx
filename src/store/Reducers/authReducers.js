import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from './../../api/api';
import { jwtDecode } from "jwt-decode"


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
            localStorage.setItem("accessToken", data.token)

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
            localStorage.setItem("accessToken", data.token)

            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }

    }
)

export const get_user_info = createAsyncThunk(
    'auth/get_user_info',
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {

            const { data } = await api.get("/get-user", {
                withCredentials: true
            })
            // console.log("login Data ===> ", data);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }

    }
)


const returnRole = (token) => {
    try {

        if (token) {

            const deCodeToken = jwtDecode(token)
            const expireTime = new Date(deCodeToken.exp * 1000)
            console.log(deCodeToken);
            

            if (new Date() > expireTime) {
                localStorage.removeItem('accessToken')
                return ""
            }
            else {
                return deCodeToken.role || ''
            }
        }
        else {
            return ''
        }
    } catch {

        localStorage.removeItem("accessToken")
        return ''


    }
}



export const authReducer = createSlice({
    name: "auth",
    initialState: {
        successMessage: "",
        errorMessage: "",
        loader: false,
        userInfo: "",
        token: localStorage.getItem("accessToken"),
        role: returnRole(localStorage.getItem('accessToken'))
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
            .addCase(admin_login.fulfilled, (state, { payload }) => {

                state.loader = false
                state.successMessage = `welcom sir`
                state.token = payload.token
                state.role = returnRole(payload.token)


            })
            .addCase(admin_login.rejected, (state, { payload }) => {

                state.loader = false
                state.errorMessage = payload.error
            })

            .addCase(seller_register.pending, (state) => {

                state.loader = true
            })
            .addCase(seller_register.fulfilled, (state, { payload }) => {

                state.loader = false
                state.successMessage = `SuccucssFully Register`
                state.token = payload.token
                state.role = returnRole(payload.token)

            })
            .addCase(seller_register.rejected, (state, { payload }) => {
                state.loader = false
                state.errorMessage = payload.error
            })
            .addCase(seller_login.pending, (state) => {
                state.loader = true

            })

            .addCase(seller_login.rejected, (state, { payload }) => {
                state.loader = false
                state.errorMessage = payload.error
            })

            .addCase(seller_login.fulfilled, (state, { payload }) => {
                state.loader = false
                state.successMessage = payload.message
                state.token = payload.token
                state.role = returnRole(payload.token)
                state.userInfo = payload.userInfo

            })
            .addCase(get_user_info.fulfilled, (state, { payload }) => {
                state.loader = false

                state.userInfo = payload.userInfo

            })
    }

})


export const { messageClear } = authReducer.actions
export default authReducer.reducer