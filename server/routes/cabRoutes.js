const express = require("express");
const router = express.Router();
const { addCab, getCabs, getAllCabs } = require("../controllers/cabController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, addCab);      // Add cab (protected)
router.get("/", getCabs);                      // Available cabs only (public)
router.get("/all", authMiddleware, getAllCabs); // All cabs (protected)

module.exports = router;
