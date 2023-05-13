import userApi from "../../../api/users";
import {logoutUser} from "./index";

export const login = async (data, {dispatch}) => {
    const res = await userApi.loginUser(data)
    const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
    localStorage.setItem('token', res.data.idToken)
    localStorage.setItem('userId', res.data.localId)
    localStorage.setItem('expirationDate', expirationDate)

    dispatch(logoutUser(res.data.expiresIn))
    return res.data
}
