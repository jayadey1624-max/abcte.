const db = require('../models/db');

exports.getCollections = (req, res) => {
  try {
    const collections = db.getCollections();
    res.json({
      success: true,
      count: collections.length,
      data: collections
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getCollectionById = (req, res) => {
  try {
    const collection = db.getCollectionById(req.params.id);
    if (!collection) {
      return res.status(404).json({ success: false, message: 'Collection not found' });
    }
    res.json({ success: true, data: collection });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
