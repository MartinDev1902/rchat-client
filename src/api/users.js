import axios from '../config/axios'
import {loginUrl, signupUrl} from "./urls";


export default {
    register: data => axios.post(signupUrl, data),
    saveUserData: data => axios.post('users.json', data),
    loginUser: data => axios.post(loginUrl, data)
}
