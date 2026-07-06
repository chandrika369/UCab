import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "user",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/register", formData);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff5e1" }}>

      {/* Top Bar */}
      <nav style={{ background: "#0d6efd", padding: "15px 0" }}>
        <div className="container d-flex justify-content-between align-items-center">
          <h4 className="mb-0 fw-bold text-white">UCab App</h4>
          <Link to="/login" className="btn btn-dark btn-sm fw-bold">Login</Link>
        </div>
      </nav>

      {/* Register Card */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "calc(100vh - 70px)" }}
      >
        <div className="col-11 col-sm-8 col-md-5 col-lg-4">
          <div className="card shadow border-0" style={{ borderRadius: "16px" }}>
            <div className="card-body p-4">

              <h3 className="text-center fw-bold mb-4">Register</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <select
                    className="form-select"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100 fw-bold py-2 mb-2"
                  disabled={loading}
                >
                  {loading ? "Creating account..." : "Signup"}
                </button>

                <p className="text-center text-muted small mb-2">
                  Already have an account?
                </p>

                <Link
                  to="/login"
                  className="btn w-100 fw-bold py-2"
                  style={{ background: "#0d6efd", color: "#fff", borderRadius: "8px" }}
                >
                  Login
                </Link>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
