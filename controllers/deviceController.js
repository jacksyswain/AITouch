const DeviceData = require("../models/DeviceData");

// POST data
exports.addDeviceData = async (req, res) => {
  const data = await DeviceData.create(req.body);
  res.status(201).json(data);
};

// GET data
exports.getDeviceData = async (req, res) => {
  const data = await DeviceData.find().sort({ createdAt: -1 });
  res.json(data);
};