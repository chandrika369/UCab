import { useEffect, useState } from "react";
import UserNavbar from "../components/UserNavbar";
import api from "../services/api";

const STATUS_COLOR = {
  Booked: "#0d6efd",
  Ongoing: "#fd7e14",
  Completed: "#198754",
  Cancelled: "#6c757d",
};

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (id) => {
    if (!window.confirm("Cancel this booking?")) return;
    setCancellingId(id);
    try {
      const token = localStorage.getItem("token");
      await api.patch(`/bookings/${id}/cancel`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBookings();
    } catch (err) {
      alert(err.response?.data?.message || "Cancellation failed");
    } finally {
      setCancellingId(null);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff5e1" }}>
      <UserNavbar />

      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">My Bookings</h2>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status" />
          </div>
        ) : bookings.length === 0 ? (
          <div className="text-center py-5">
            <div style={{ fontSize: "60px" }}>🚖</div>
            <h5 className="text-muted mt-3">No bookings found</h5>
          </div>
        ) : (
          bookings.map((booking) => (
            <div
              key={booking._id}
              className="card border-0 shadow mb-4"
              style={{ borderRadius: "14px", background: "#fff" }}
            >
              <div className="card-body p-4">

                {/* Row 1 */}
                <div className="row text-center border-bottom pb-3 mb-3">
                  <div className="col">
                    <div className="text-muted small">Cab Booked Date</div>
                    <div className="fw-bold">
                      {new Date(booking.createdAt).toLocaleDateString("en-IN")}
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-muted small">Trip</div>
                    <div className="fw-bold">
                      {booking.pickupLocation} → {booking.dropLocation}
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-muted small">Pickup</div>
                    <div className="fw-bold">{booking.pickupLocation}</div>
                  </div>
                  <div className="col">
                    <div className="text-muted small">Drop</div>
                    <div className="fw-bold">{booking.dropLocation}</div>
                  </div>
                  <div className="col">
                    <div className="text-muted small">Driver</div>
                    <div className="fw-bold">{booking.cab?.driverName}</div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="row text-center align-items-center">
                  <div className="col">
                    <div className="text-muted small">Car</div>
                    <div className="fw-bold">{booking.cab?.driverName}</div>
                  </div>
                  <div className="col">
                    <div className="text-muted small">Car Type</div>
                    <div className="fw-bold">{booking.cab?.cabType}</div>
                  </div>
                  <div className="col">
                    <div className="text-muted small">Car No</div>
                    <div className="fw-bold">{booking.cab?.cabNumber}</div>
                  </div>
                  <div className="col">
                    <div className="text-muted small">Amount Paid</div>
                    <div className="fw-bold">₹{booking.fare}</div>
                  </div>
                  <div className="col">
                    <div className="text-muted small">Status</div>
                    <div
                      className="fw-bold"
                      style={{ color: STATUS_COLOR[booking.status] || "#000" }}
                    >
                      {booking.status === "Booked" ? "On the Way" : booking.status}
                    </div>
                  </div>
                  <div className="col">
                    {(booking.status === "Booked" || booking.status === "Ongoing") && (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => cancelBooking(booking._id)}
                        disabled={cancellingId === booking._id}
                        title="Cancel booking"
                      >
                        🗑️
                      </button>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyBookings;
