import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import { signupUser} from "./registerUser";



const initialState = {
    name: '',
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
     extraReducers:( builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.token = action.payload.idToken
            state.name = action.payload.name
        })
    }
})


export const registerUser = createAsyncThunk('auth/registerUser', signupUser)



export const {} = authSlice.actions
export default authSlice.reducer
