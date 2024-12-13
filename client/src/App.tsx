import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import ShowNavbar from "./components/ShowNavbar"
import Contact from "./pages/Contact"
import BookDetails from "./pages/BookDetails"
import GenerPage from "./pages/GenerPage"

function App() {


  return (
    <BrowserRouter>
    <ShowNavbar>
    <Navbar/>

    </ShowNavbar>
    
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/book/:id" element={<BookDetails/>}></Route>
          <Route path="/gener/:name" element={<GenerPage/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
