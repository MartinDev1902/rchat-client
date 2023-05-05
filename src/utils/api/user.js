import axios from "../../core/axios";

export default {
    signIn: data => axios.post('user/signin', data),
    signUp: data => axios.post('user/signupn', data),
}
