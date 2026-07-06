const express = require("express");
const router = express.Router();
const { bookCab, getMyBookings, cancelBooking } = require("../controllers/bookingController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, bookCab);
router.get("/", authMiddleware, getMyBookings);
router.patch("/:id/cancel", authMiddleware, cancelBooking);

module.exports = router;
