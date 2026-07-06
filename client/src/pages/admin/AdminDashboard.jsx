import { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import api from "../../services/api";

function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, cabs: 0, bookings: 0 });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/admin/stats", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff5e1" }}>
      <AdminNavbar />

      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">Dashboard</h2>

        <div className="card border-0 shadow-lg p-5" style={{ borderRadius: "16px", background: "#fff" }}>

          {/* Stats Cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div
                className="text-center p-4"
                style={{ background: "#0d6efd", color: "#fff", borderRadius: "14px" }}
              >
                <h3 className="fw-bold mb-1">USERS</h3>
                <h1 className="fw-bold">{stats.users}</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="text-center p-4"
                style={{ background: "#0d6efd", color: "#fff", borderRadius: "14px" }}
              >
                <h3 className="fw-bold mb-1">CABS</h3>
                <h1 className="fw-bold">{stats.cabs}</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="text-center p-4"
                style={{ background: "#0d6efd", color: "#fff", borderRadius: "14px" }}
              >
                <h3 className="fw-bold mb-1">BOOKINGS</h3>
                <h1 className="fw-bold">{stats.bookings}</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
