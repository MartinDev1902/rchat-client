import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import RecoveryPassword from "./pages/RecoveryPassword";
import SetNewPassword from "./pages/SetNewPassword";
import {Route, Routes, Navigate} from "react-router-dom";
import Chat from "./pages/Chat/Chat";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/chat"/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/chat/:id" element={<Chat/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<SignUp/>}/>
            <Route path="/recovery" element={<RecoveryPassword/>}/>
            <Route path="/recovery/:code" element={<SetNewPassword/>}/>
        </Routes>
    )
}

export default App;
