import { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import api from "../../services/api";

const CAB_IMAGES = {
  Mini: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600",
  Sedan: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
  SUV: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600",
  Bike: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
};

function AdminCabs() {
  const [cabs, setCabs] = useState([]);

  useEffect(() => {
    fetchCabs();
  }, []);

  const fetchCabs = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/cabs/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCabs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this cab?")) return;
    alert("Delete functionality not yet implemented in backend");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff5e1" }}>
      <AdminNavbar />

      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Car List</h2>

        <div className="d-flex gap-2 justify-content-center mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by car name"
            style={{ maxWidth: "200px" }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Search by car type"
            style={{ maxWidth: "200px" }}
          />
          <button className="btn fw-bold" style={{ background: "#0d6efd", color: "#fff" }}>
            Sort Price ⬆
          </button>
        </div>

        <div className="row g-4">
          {cabs.map((cab) => (
            <div className="col-md-6 col-lg-3" key={cab._id}>
              <div
                className="card border-0 shadow h-100"
                style={{ borderRadius: "14px", background: "#ffe8b3" }}
              >
                <div className="p-3">
                  <img
                    src={CAB_IMAGES[cab.cabType] || CAB_IMAGES.Sedan}
                    alt={cab.cabType}
                    style={{
                      width: "100%",
                      height: "140px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      background: "#fff",
                    }}
                  />
                </div>

                <div className="card-body pt-0">
                  <p className="mb-1">
                    <strong>Driver:</strong> {cab.driverName}
                  </p>
                  <p className="mb-1">
                    <strong>Model:</strong> {cab.cabType}
                  </p>
                  <p className="mb-1">
                    <strong>Type:</strong> {cab.cabType}
                  </p>
                  <p className="mb-1">
                    <strong>Number:</strong> {cab.cabNumber}
                  </p>
                  <p className="mb-2">
                    <strong>Price:</strong> ₹{cab.pricePerKm}/Km
                  </p>

                  <div className="d-flex gap-2">
                    <button className="btn btn-dark btn-sm fw-bold flex-fill">
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm fw-bold flex-fill"
                      onClick={() => handleDelete(cab._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminCabs;
