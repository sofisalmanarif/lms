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

import { DashboardLayout } from "./pages/Superadmin/DashboardLayout"
import { AdminDashboardLayout } from "./pages/admin/AdminDashboardLayout"
import { BooksPage } from "./pages/admin/BooksPage"
import { UsersPage } from "./pages/admin/UsersPage"
import { UsersRequestPage } from "./pages/admin/UserRequestPage"
import { ReservationsPage } from "./pages/admin/ReservationsPage"

function App() {


  return (
    <BrowserRouter>
      <ShowNavbar>
        <Navbar />

      </ShowNavbar>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/book/:id" element={<BookDetails />}></Route>
        <Route path="/gener/:name" element={<GenerPage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>


        {/* super admin routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="libraries" element={<SuperAdminLibraries />} />
          <Route path="new-library" element={<NewLibraryRequest />} />
          <Route path="library-admins" element={<LibraryAdmins />} />
        </Route>

        {/*  admin routes */}
        <Route path="/admin" element={<AdminDashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="new-users" element={<UsersRequestPage />} />
          <Route path="reservations" element={<ReservationsPage />} />
          <Route path="borrowings" element={<ReservationsPage />} />
        </Route>



      </Routes>
    </BrowserRouter>
  )
}

export default App
