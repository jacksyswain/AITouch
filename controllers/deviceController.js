const DeviceData = require("../models/DeviceData");
const deviceSchema = require("../validations/deviceValidation");

// POST data
exports.addDeviceData = async (req, res, next) => {
  try {
    // ✅ Validate
    const { error } = deviceSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    // ✅ Save
    const data = await DeviceData.create(req.body);
    res.status(201).json(data);

  } catch (err) {
    next(err);
  }
};