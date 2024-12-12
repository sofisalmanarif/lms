import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import ShowNavbar from "./components/ShowNavbar"
import Contact from "./pages/Contact"

function App() {


  return (
    <BrowserRouter>
    <ShowNavbar>
    <Navbar/>

    </ShowNavbar>
    
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/contact" element={<Contact/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
