import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={{ background: "#0d6efd", padding: "12px 0" }}>
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">

        <h5 className="mb-0 fw-bold text-white">UCab App</h5>

        <div className="d-flex align-items-center gap-3 flex-wrap">
          <Link to="/admin/dashboard" className="text-white text-decoration-none fw-semibold">
            Home
          </Link>
          <Link to="/admin/users" className="text-white text-decoration-none fw-semibold">
            Users
          </Link>
          <Link to="/admin/cabs" className="text-white text-decoration-none fw-semibold">
            Cabs
          </Link>
          <Link to="/admin/addcab" className="text-white text-decoration-none fw-semibold">
            AddCab
          </Link>

          <button
            onClick={logout}
            className="btn btn-dark btn-sm fw-bold px-3"
            style={{ borderRadius: "8px" }}
          >
            Logout
          </button>

          {user.name && (
            <span
              className="text-white fw-semibold"
              style={{ fontSize: "14px", opacity: 0.9 }}
            >
              ({user.name})
            </span>
          )}
        </div>

      </div>
    </nav>
  );
}

export default AdminNavbar;
