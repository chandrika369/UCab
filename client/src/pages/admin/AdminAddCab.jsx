import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";
import api from "../../services/api";

function AdminAddCab() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    driverName: "",
    cabNumber: "",
    cabType: "",
    pricePerKm: "",
    currentLocation: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await api.post("/cabs", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert(res.data.message);
      navigate("/admin/cabs");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add cab");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff5e1" }}>
      <AdminNavbar />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-0 shadow" style={{ borderRadius: "16px" }}>
              <div className="card-body p-4">

                <h3 className="text-center fw-bold mb-4">Add Car</h3>

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control mb-3"
                    name="driverName"
                    placeholder="Driver Name"
                    value={formData.driverName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    className="form-control mb-3"
                    name="cabNumber"
                    placeholder="Car No"
                    value={formData.cabNumber}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    className="form-control mb-3"
                    name="cabType"
                    placeholder="Car Type (Mini / Sedan / SUV)"
                    value={formData.cabType}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="number"
                    className="form-control mb-3"
                    name="pricePerKm"
                    placeholder="Price per KM"
                    value={formData.pricePerKm}
                    onChange={handleChange}
                    required
                    min="1"
                  />

                  <input
                    type="text"
                    className="form-control mb-3"
                    name="currentLocation"
                    placeholder="Current Location"
                    value={formData.currentLocation}
                    onChange={handleChange}
                    required
                  />

                  <div className="mb-3">
                    <label className="form-label text-muted small">Car Image</label>
                    <input type="file" className="form-control" accept="image/*" />
                  </div>

                  <button
                    type="submit"
                    className="btn w-100 fw-bold py-2 mt-2"
                    style={{ background: "#0d6efd", color: "#fff", borderRadius: "10px" }}
                    disabled={loading}
                  >
                    {loading ? "Adding..." : "Submit"}
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAddCab;
