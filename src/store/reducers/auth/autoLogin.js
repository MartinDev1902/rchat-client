import {refreshTokenUrl} from "../../../api/urls";
import {authLogout, logoutUser} from "./index";

export const loginRefresh = (data, {dispatch}) => {
    const token = localStorage.getItem('token')

    if(!token){
        dispatch(authLogout())
    }else{
        const expirationDate = new Date(localStorage.getItem('expirationDate'))

        if(expirationDate <= new Date()){
            dispatch(authLogout())
        }else{
            dispatch(logoutUser((expirationDate.getTime() - new Date().getTime()) / 1000))
            //TODO Refresh access token
            return token
        }
    }
}
