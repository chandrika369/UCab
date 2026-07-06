const express = require("express");
const router = express.Router();
const { getStats, getAllUsers } = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/stats", authMiddleware, getStats);
router.get("/users", authMiddleware, getAllUsers);

module.exports = router;
