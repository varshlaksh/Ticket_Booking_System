const Slot = require("../models/Slot");

// Create new slot (admin only)
exports.createSlot = async (req, res) => {
  const { date, time } = req.body;

  try {
    const slot = new Slot({ date, time });
    await slot.save();
    res.status(201).json(slot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all available slots
exports.getAvailableSlots = async (req, res) => {
  try {
    const slots = await Slot.find({ isBooked: false });
    res.status(200).json(slots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
