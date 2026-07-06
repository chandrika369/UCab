const Booking = require("../models/Booking");
const Cab = require("../models/Cab");

const bookCab = async (req, res) => {
  try {
    const { cabId, pickupLocation, dropLocation, distance } = req.body;

    const cab = await Cab.findById(cabId);
    if (!cab) {
      return res.status(404).json({ message: "Cab not found" });
    }

    const fare = distance * cab.pricePerKm;

    const booking = await Booking.create({
      user: req.user.id,
      cab: cabId,
      pickupLocation,
      dropLocation,
      distance,
      fare,
    });

    res.status(201).json({ message: "Cab booked successfully", booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("cab")
      .sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Only allow the owner to cancel
    if (booking.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorised" });
    }

    if (booking.status === "Completed") {
      return res.status(400).json({ message: "Cannot cancel a completed booking" });
    }

    if (booking.status === "Cancelled") {
      return res.status(400).json({ message: "Booking is already cancelled" });
    }

    booking.status = "Cancelled";
    await booking.save();

    res.status(200).json({ message: "Booking cancelled successfully", booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { bookCab, getMyBookings, cancelBooking };
