import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import RecoveryPassword from "./pages/RecoveryPassword";
import SetNewPassword from "./pages/SetNewPassword";
import {Route, Routes, Navigate} from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {autoLogin} from "./store/reducers/auth";


const App = () => {
    const state = useSelector(state => !!state.auth.token)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(autoLogin())
    }, [dispatch])

    return (
        <Routes>
            <Route path="/" element={state ? <Navigate replace to="/chat"/> : <Navigate replace to={'/login'}/>}/>
            <Route path="/chat" element={state ? <Chat/> : <Navigate replace to={'/login'}/>}/>
            <Route path="/chat/:id" element={state ? <Chat/> : <Navigate replace to={'/login'}/>}/>
            <Route path="/login" element={state ? <Navigate replace to={'/chat'}/> : <Login/>}/>
            <Route path="/register" element={state ? <Navigate replace to={'/chat'}/> : <SignUp/>}/>
            <Route path="/recovery" element={state ? <Navigate replace to={'/chat'}/> : <RecoveryPassword/>}/>
            <Route path="/recovery/:code" element={state ? <Navigate replace to={'/chat'}/> : <SetNewPassword/>}/>
        </Routes>
    )
}

export default App;
