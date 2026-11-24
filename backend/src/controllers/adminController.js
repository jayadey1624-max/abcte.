const db = require('../models/db');

exports.getMetrics = (req, res) => {
  try {
    const metrics = db.getMetrics();
    res.json({
      success: true,
      data: metrics
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
