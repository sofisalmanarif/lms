import { Suspense, lazy } from "react"; // Import React and Suspense
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowNavbar from "./components/ShowNavbar";
import Navbar from "./components/Navbar";
import RegisterLibrary from "./pages/RegisterLibrary";
import { Toaster } from "./components/ui/toaster";

// Lazy loading components
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const BookDetails = lazy(() => import("./pages/BookDetails"));
const GenerPage = lazy(() => import("./pages/GenerPage"));
const Profile = lazy(() => import("./pages/Profile"));

// Superadmin pages
const DashboardLayout = lazy(() => import("./pages/Superadmin/DashboardLayout"));
const Dashboard = lazy(() => import("./pages/Superadmin/Dashboard"));
const SuperAdminLibraries = lazy(() => import("./pages/Superadmin/SuperAdminLibraries"));
const NewLibraryRequest = lazy(() => import("./pages/Superadmin/NewLibraryRequset"));
const LibraryAdmins = lazy(() => import("./pages/Superadmin/LibraryAdmins"));

// Admin pages
const AdminDashboardLayout = lazy(() => import("./pages/admin/AdminDashboardLayout"));
const BooksPage = lazy(() => import("./pages/admin/BooksPage"));
const UsersPage = lazy(() => import("./pages/admin/UsersPage"));
const UsersRequestPage = lazy(() => import("./pages/admin/UserRequestPage"));
const ReservationsPage = lazy(() => import("./pages/admin/ReservationsPage"));
const BorrowingPage = lazy(() => import("./pages/admin/BorrowingPage"));

function App() {
  return (
    <BrowserRouter>
      <ShowNavbar>
        <Navbar />
      </ShowNavbar>
      <Toaster />

      {/* Fallback while loading components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-library" element={<RegisterLibrary />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/gener/:name" element={<GenerPage />} />
          <Route path="/profile" element={<Profile />} />

          {/* Super Admin Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="libraries" element={<SuperAdminLibraries />} />
            <Route path="new-library" element={<NewLibraryRequest />} />
            <Route path="library-admins" element={<LibraryAdmins />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="books" element={<BooksPage />} />
            <Route path="new-users" element={<UsersRequestPage />} />
            <Route path="reservations" element={<ReservationsPage />} />
            <Route path="borrowings" element={<BorrowingPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
