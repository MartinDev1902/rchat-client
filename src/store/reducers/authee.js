import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {signupUrl, getUserUrl} from "../../api/urls";
import userApi from "../../api/users";

const initialState = {
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log(action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.token = action.payload.idToken

        })

        builder.addCase(getUser.fulfilled, (state, action) => {
            console.log(action.payload)
        })
    }
})

export const registerUser = createAsyncThunk('auth/registerUser', async (data) => {
    try {
        const userData = {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        }

        const response = await userApi.register(userData)


        const user = {
            id: response.data.localId,
            firstName: data.firstName,
            lastName: data.lastName,
            image: 'https://cdn.pixabay.com/photo/2012/07/25/16/36/mt-hood-52840_1280.jpg',
            email: data.email,
            location: '',
            status: 'Some text fore status',
            socialMedias: [
                {title: 'Instagram', link: 'https://instagram.com'},
                {title: 'Twitter', link: 'https://twitter.com'},
                {title: 'Facebook', link: 'https://facebook.com'},
            ],
            interests: ['Cooking', 'Swimming', 'Laughing']
        }

        const newResponse = await userApi.createNewUser(user)
        console.group();
        console.group('New response: ' )
        console.group(newResponse)
        console.groupEnd();
        console.group();
        console.log('Response: ' )
        console.log(response)
        console.groupEnd();


        return {...response.data, ...newResponse.data}
    }catch (e) {
        console.log(e)
    }
})

export const getUser = createAsyncThunk('auth/getUser', async (tokenID) => {
    const response = await axios.post(getUserUrl, {idToken: tokenID})
    return response.data
})

export const {loginUser} = authSlice.actions

export default authSlice.reducer
