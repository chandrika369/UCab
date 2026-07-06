import { Link } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div style={{ minHeight: "100vh", background: "#fff5e1" }}>
      <UserNavbar />

      <div className="container py-5">
        <h2 className="text-center fw-bold mb-2">Available Cabs</h2>
        <p className="text-center text-muted mb-4">Choose from our fleet and book your ride</p>

        {/* Quick Actions */}
        <div className="row g-4 justify-content-center">
          <div className="col-md-5">
            <div
              className="card border-0 shadow text-center p-4 h-100"
              style={{ borderRadius: "16px", background: "#ffe8b3" }}
            >
              <div style={{ fontSize: "50px" }}>🚖</div>
              <h4 className="fw-bold mt-2">Book a Cab</h4>
              <p className="text-muted">Book a ride instantly.</p>
              <Link
                to="/book"
                className="btn fw-bold mt-auto"
                style={{ background: "#0d6efd", color: "#fff", borderRadius: "10px" }}
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="col-md-5">
            <div
              className="card border-0 shadow text-center p-4 h-100"
              style={{ borderRadius: "16px", background: "#ffe8b3" }}
            >
              <div style={{ fontSize: "50px" }}>📋</div>
              <h4 className="fw-bold mt-2">My Bookings</h4>
              <p className="text-muted">View all your ride history.</p>
              <Link
                to="/mybookings"
                className="btn fw-bold mt-auto"
                style={{ background: "#0d6efd", color: "#fff", borderRadius: "10px" }}
              >
                View Bookings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
