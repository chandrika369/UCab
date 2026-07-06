import { useEffect, useState } from "react";
import UserNavbar from "../components/UserNavbar";
import api from "../services/api";

const CAB_IMAGES = {
  Mini: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600",
  Sedan: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
  SUV: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600",
  Hatchback: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/2017_Maruti_Suzuki_Swift_VDi_%28facelift%2C_red%29%2C_front_8.14.17.jpg/1200px-2017_Maruti_Suzuki_Swift_VDi_%28facelift%2C_red%29%2C_front_8.14.17.jpg",
};

function BookCab() {
  const [cabs, setCabs] = useState([]);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [bookingCabId, setBookingCabId] = useState(null);

  useEffect(() => {
    fetchCabs();
  }, []);

  const fetchCabs = async () => {
    try {
      const res = await api.get("/cabs");
      setCabs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getFarePreview = (pricePerKm) => {
    const d = parseFloat(distance);
    if (!d || d <= 0) return null;
    return (d * pricePerKm).toFixed(0);
  };

  const bookCab = async (cabId) => {
    if (!pickupLocation || !dropLocation || !distance) {
      alert("Please fill in Pickup Location, Drop Location and Distance.");
      return;
    }
    setBookingCabId(cabId);
    try {
      const token = localStorage.getItem("token");
      const res = await api.post(
        "/bookings",
        { cabId, pickupLocation, dropLocation, distance: Number(distance) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(res.data.message);
      setPickupLocation("");
      setDropLocation("");
      setDistance("");
      fetchCabs();
    } catch (err) {
      alert(err.response?.data?.message || "Booking Failed");
    } finally {
      setBookingCabId(null);
    }
  };

  const displayed = cabs
    .filter((c) =>
      c.driverName.toLowerCase().includes(nameFilter.toLowerCase()) &&
      c.cabType.toLowerCase().includes(typeFilter.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc ? a.pricePerKm - b.pricePerKm : b.pricePerKm - a.pricePerKm
    );

  return (
    <div style={{ minHeight: "100vh", background: "#fff5e1" }}>
      <UserNavbar />

      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Available Cabs</h2>

        {/* Search + Sort */}
        <div className="d-flex gap-2 justify-content-center mb-4 flex-wrap">
          <input
            type="text"
            className="form-control"
            placeholder="Search by car name"
            style={{ maxWidth: "200px" }}
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Search by car type"
            style={{ maxWidth: "200px" }}
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          />
          <button
            className="btn fw-bold"
            style={{ background: "#0d6efd", color: "#fff", borderRadius: "8px" }}
            onClick={() => setSortAsc(!sortAsc)}
          >
            Sort Price: {sortAsc ? "Low to High" : "High to Low"}
          </button>
        </div>

        {/* Booking Detail Inputs */}
        <div
          className="card border-0 shadow mb-5 p-4"
          style={{ borderRadius: "14px", background: "#fff" }}
        >
          <h5 className="fw-bold mb-3 text-center">Book a Ride — Fill Details First</h5>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="📍 Pickup Location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="🏁 Drop Location"
                value={dropLocation}
                onChange={(e) => setDropLocation(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                placeholder="📏 Distance (KM)"
                value={distance}
                min="1"
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Cab Cards */}
        <div className="row g-4">
          {displayed.map((cab) => {
            const fare = getFarePreview(cab.pricePerKm);
            return (
              <div className="col-md-6 col-lg-4" key={cab._id}>
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
                        height: "160px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <div className="card-body pt-0">
                    <p className="mb-1">
                      🚗 <strong>Model:</strong> {cab.driverName}
                    </p>
                    <p className="mb-1">
                      <strong>Type:</strong> {cab.cabType}
                    </p>
                    <p className="mb-1">
                      <strong>Car No:</strong> {cab.cabNumber}
                    </p>
                    <p className="mb-1">
                      <strong>Driver:</strong> {cab.driverName}
                    </p>
                    <p className="mb-1">
                      <strong>Fare:</strong> ₹{cab.pricePerKm}/Km
                    </p>

                    {fare && (
                      <p className="mb-2 text-success fw-bold">
                        💰 Estimated: ₹{fare}
                      </p>
                    )}

                    <button
                      className="btn w-100 fw-bold mt-2"
                      style={{ background: "#0d6efd", color: "#fff", borderRadius: "8px" }}
                      onClick={() => bookCab(cab._id)}
                      disabled={bookingCabId === cab._id}
                    >
                      {bookingCabId === cab._id ? "Booking..." : "Book Cab"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default BookCab;
