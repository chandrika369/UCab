import { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import api from "../../services/api";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff5e1" }}>
      <AdminNavbar />

      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">Users</h2>

        <div className="card border-0 shadow p-4" style={{ borderRadius: "16px" }}>
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead style={{ background: "#ffe8b3" }}>
                <tr>
                  <th>S/No</th>
                  <th>UserId</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, idx) => (
                  <tr key={u._id}>
                    <td>{idx + 1}</td>
                    <td style={{ fontSize: "13px" }}>{u._id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>
                      <button className="btn btn-sm me-2" style={{ background: "#0d6efd", color: "#fff" }}>
                        ✏️
                      </button>
                      <button className="btn btn-danger btn-sm">🗑️</button>
                      <button className="btn btn-sm ms-2" style={{ background: "#0d6efd", color: "#fff" }}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
