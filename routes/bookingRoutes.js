const express = require("express");
const router = express.Router();
const { bookSlot } = require("../controllers/bookingController");
const authenticate = require("../middleware/authMiddleware");

router.post("/", authenticate, bookSlot);

module.exports = router;
