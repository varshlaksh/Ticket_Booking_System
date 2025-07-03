const express = require("express");
const router = express.Router();
const { createSlot, getAvailableSlots } = require("../controllers/slotController");
const authenticate = require("../middleware/authMiddleware");

router.post("/", authenticate, createSlot); // only authenticated users (ideally admin)
router.get("/", getAvailableSlots);

module.exports = router;
