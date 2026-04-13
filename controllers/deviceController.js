const asyncHandler = require("../middleware/asyncHandler");
const DeviceData = require("../models/DeviceData");
const deviceSchema = require("../validations/deviceValidation");

exports.addDeviceData = asyncHandler(async (req, res) => {
  const { error } = deviceSchema.validate(req.body);

  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const data = await DeviceData.create(req.body);

  // 🔥 SEND REAL-TIME DATA
  const io = req.app.get("io");
  io.emit("deviceData", data);

  res.status(201).json(data);
});