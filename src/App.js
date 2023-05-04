import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import RecoveryPassword from "./pages/RecoveryPassword";
import SetNewPassword from "./pages/SetNewPassword";
import {Route, Routes} from "react-router-dom";
import Chat from "./pages/Chat/Chat";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Chat/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/recovery" element={<RecoveryPassword/>}/>
        <Route path="/recovery/:code" element={<SetNewPassword/>}/>
      </Routes>
  )
}

export default App;
