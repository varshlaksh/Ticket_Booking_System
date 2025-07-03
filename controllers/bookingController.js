const Booking = require("../models/Booking");
const Slot = require("../models/Slot");

// Book a slot
exports.bookSlot = async (req, res) => {
  const { slotId } = req.body;
  const userId = req.user.userId; // from middleware

  try {
    const slot = await Slot.findById(slotId);
    if (!slot || slot.isBooked) return res.status(400).json({ message: "Slot not available" });

    slot.isBooked = true;
    await slot.save();

    const booking = new Booking({
      user: userId,
      slot: slotId
    });

    await booking.save();
    res.status(201).json({ message: "Booking confirmed", booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
