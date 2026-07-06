const User = require("../models/User");
const Cab = require("../models/Cab");
const Booking = require("../models/Booking");

const getStats = async (req, res) => {
  try {
    const [users, cabs, bookings] = await Promise.all([
      User.countDocuments(),
      Cab.countDocuments(),
      Booking.countDocuments(),
    ]);

    res.status(200).json({ users, cabs, bookings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getStats, getAllUsers };
