import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

// User pages
import Dashboard from "./pages/Dashboard";
import BookCab from "./pages/BookCab";
import MyBookings from "./pages/MyBookings";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminCabs from "./pages/admin/AdminCabs";
import AdminAddCab from "./pages/admin/AdminAddCab";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/book" element={<BookCab />} />
      <Route path="/mybookings" element={<MyBookings />} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/cabs" element={<AdminCabs />} />
      <Route path="/admin/addcab" element={<AdminAddCab />} />
    </Routes>
  );
}

export default App;
