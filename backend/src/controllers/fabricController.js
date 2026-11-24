const db = require('../models/db');

exports.getFabrics = (req, res) => {
  try {
    const fabrics = db.getFabrics(req.query);
    res.json({
      success: true,
      count: fabrics.length,
      data: fabrics
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getFabricById = (req, res) => {
  try {
    const fabric = db.getFabricById(req.params.id);
    if (!fabric) {
      return res.status(404).json({ success: false, message: 'Fabric not found' });
    }
    res.json({ success: true, data: fabric });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createFabric = (req, res) => {
  try {
    const { name, category, spec, price, pricePerYard, composition, width, swatches, image, description } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, message: 'Textile name is required' });
    }
    const newFabric = db.addFabric({
      name,
      category,
      spec,
      pricePerYard: pricePerYard || price,
      composition,
      width,
      swatches,
      image,
      description
    });
    res.status(201).json({
      success: true,
      message: 'New fabric added to archive catalogue',
      data: newFabric
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteFabric = (req, res) => {
  try {
    const deleted = db.deleteFabric(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Fabric not found' });
    }
    res.json({ success: true, message: 'Fabric archived successfully', data: deleted });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
