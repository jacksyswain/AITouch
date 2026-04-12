const Joi = require("joi");

const deviceSchema = Joi.object({
  deviceId: Joi.string().required(),
  temperature: Joi.number().required(),
  voltage: Joi.number().required(),
});

module.exports = deviceSchema;