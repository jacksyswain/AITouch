const express = require("express");
const router = express.Router();

const {
  addDeviceData,
  getDeviceData
} = require("../controllers/deviceController");

router.post("/data", addDeviceData);
router.get("/data", getDeviceData);

module.exports = router;