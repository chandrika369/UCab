import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Redirect based on role
      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
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

      {/* Login Card */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "calc(100vh - 70px)" }}
      >
        <div className="col-11 col-sm-8 col-md-5 col-lg-4">
          <div className="card shadow border-0" style={{ borderRadius: "16px" }}>
            <div className="card-body p-4">

              <h3 className="text-center fw-bold mb-4">Login</h3>

              <form onSubmit={handleSubmit}>
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
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100 fw-bold py-2 mb-2"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                <p className="text-center text-muted small mb-2">
                  Don't have an account?
                </p>

                <Link
                  to="/register"
                  className="btn w-100 fw-bold py-2"
                  style={{ background: "#0d6efd", color: "#fff", borderRadius: "8px" }}
                >
                  Register
                </Link>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
