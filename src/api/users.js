import axios from '../config/axios'
import {loginUrl, refreshTokenUrl, signupUrl} from "./urls";

const userApi = {
    register: data => axios.post(signupUrl, data),
    saveUserData: data => axios.post('users.json', data),
    loginUser: data => axios.post(loginUrl, data),
    refreshToken: data => axios.post(refreshTokenUrl, data)
}

export default userApi
