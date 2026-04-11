const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
  deviceId: {
    type: String,
    required: true,
  },
  temperature: Number,
  voltage: Number,
}, {
  timestamps: true
});

module.exports = mongoose.model("DeviceData", deviceSchema);