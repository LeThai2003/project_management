
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Home from "./pages/home/Home"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Project from "./pages/project"
import TaskDetail from "./pages/Task/TaskDetail"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/project/:id" element={<Project/>}/>
          <Route path="/task/:id" element={<TaskDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
