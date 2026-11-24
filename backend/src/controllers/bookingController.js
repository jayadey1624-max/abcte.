const db = require('../models/db');

exports.getBookings = (req, res) => {
  try {
    const bookings = db.getBookings(req.query);
    res.json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createBooking = (req, res) => {
  try {
    const { name, clientName, email, date, time, company, message, notes } = req.body;
    const finalName = name || clientName;
    if (!finalName || !email || !date || !time) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, date, and time slot are required for showroom booking'
      });
    }

    const booking = db.addBooking({
      name: finalName,
      email,
      date,
      time,
      company,
      message: message || notes
    });

    res.status(201).json({
      success: true,
      message: 'Showroom consultation confirmed',
      data: booking
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateBookingStatus = (req, res) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ success: false, message: 'Status is required' });
    }
    const updated = db.updateBookingStatus(req.params.id, status);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }
    res.json({ success: true, message: 'Booking status updated', data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
