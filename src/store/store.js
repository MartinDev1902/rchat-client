import {configureStore} from "@reduxjs/toolkit";
import authReducer from './reducers/auth'
import thunk from "redux-thunk";
export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(thunk)
})
