
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Home from "./pages/home/Home"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Project from "./pages/project"
import TaskDetail from "./pages/Task/TaskDetail"
import ForgotPassword from "./pages/auth/ForgotPassword"
import OtpPassword from "./pages/auth/OtpPassword"
import ResetPassword from "./pages/auth/ResetPassword"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/otp-password" element={<OtpPassword/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>

          <Route path="/home" element={<Home/>}/>
          <Route path="/project/:id" element={<Project/>}/>
          <Route path="/task/:id" element={<TaskDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
