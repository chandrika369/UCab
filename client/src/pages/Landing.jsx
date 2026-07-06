import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff5e1" }}>
      
      {/* Top Bar */}
      <nav style={{ background: "#ffa500", padding: "15px 0" }}>
        <div className="container d-flex justify-content-between align-items-center">
          <h4 className="mb-0 fw-bold" style={{ color: "#000" }}>
            Cab Booking App
          </h4>
          <Link
            to="/login"
            className="btn btn-dark btn-sm fw-bold"
            style={{ borderRadius: "8px" }}
          >
            Login →
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "calc(100vh - 70px)", textAlign: "center", padding: "40px 20px" }}
      >
        <h1 className="fw-bold mb-3" style={{ fontSize: "48px", color: "#000" }}>
          Your Ride, Your Way
        </h1>
        <p className="mb-4" style={{ fontSize: "20px", color: "#555" }}>
          Reliable. Fast. Affordable. Book cabs anytime, anywhere.
        </p>

        <Link
          to="/login"
          className="btn btn-dark btn-lg px-5 py-3 fw-bold mb-5"
          style={{ borderRadius: "12px", fontSize: "18px" }}
        >
          Explore Services
        </Link>

        {/* Taxi Image */}
        <div style={{ maxWidth: "500px" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3097/3097136.png"
            alt="Taxi"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
