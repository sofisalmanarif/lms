import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import ShowNavbar from "./components/ShowNavbar"
import Contact from "./pages/Contact"
import BookDetails from "./pages/BookDetails"
import GenerPage from "./pages/GenerPage"
import Profile from "./pages/Profile"
import { Dashboard } from "./pages/Superadmin/Dashboard"
import { SuperAdminLibraries } from "./pages/Superadmin/SuperAdminLibraries"
import { NewLibraryRequest } from "./pages/Superadmin/NewLibraryRequset"
import { LibraryAdmins } from "./pages/Superadmin/LibraryAdmins"

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
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/dashboard/libraries" element={<SuperAdminLibraries/>}></Route>
          <Route path="/dashboard/new-library" element={<NewLibraryRequest/>}></Route>
          <Route path="/dashboard/library-admins" element={<LibraryAdmins/>}></Route>
          

      </Routes>
    </BrowserRouter>
  )
}

export default App
