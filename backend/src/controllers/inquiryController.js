const db = require('../models/db');

exports.getInquiries = (req, res) => {
  try {
    const inquiries = db.getInquiries();
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createInquiry = (req, res) => {
  try {
    const { subject, message, email, phone } = req.body;
    if (!subject || !message) {
      return res.status(400).json({ success: false, message: 'Subject and message are required' });
    }
    const inquiry = db.addInquiry({ subject, message, email, phone });
    res.status(201).json({
      success: true,
      message: 'Inquiry received by textile concierge',
      data: inquiry
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createSampleOrder = (req, res) => {
  try {
    const { items, clientName, email, address } = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, message: 'Sample kit cannot be empty' });
    }
    const order = db.addSampleOrder({ items, clientName, email, address });
    res.status(201).json({
      success: true,
      message: 'Fabric sample request placed successfully',
      data: order
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
