import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import { signupUser} from "./registerUser";
import {login} from "./loginUser";
import {loginRefresh} from "./autoLogin";


const initialState = {
    name: '',
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogout: (state, action) => {
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('expirationDate')
            state.token = null
        }
    },
     extraReducers:( builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.token = action.payload.idToken
            state.name = action.payload.name
        })

         builder.addCase(loginUser.fulfilled, (state, action) => {
             state.token = action.payload.idToken
         })

         builder.addCase(autoLogin.fulfilled, (state, action) => {
             state.token = action.payload
         })
    }
})


export const registerUser = createAsyncThunk('auth/registerUser', signupUser)
export const loginUser = createAsyncThunk('auth/loginUser', login)
export const autoLogin = createAsyncThunk('auth/autoLogin', loginRefresh )
export const logoutUser = createAsyncThunk('auth/logoutUser', (time, {dispatch}) => {
    setTimeout(() => {
        dispatch(authLogout())
    }, 10000)
})

export const {authLogout} = authSlice.actions
export default authSlice.reducer
