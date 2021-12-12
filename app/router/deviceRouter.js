const express = require('express');
const deviceRouter = express.Router();

const deviceController = require('../controller/deviceController');
const auth = require("../middleware/auth")

deviceRouter.get("/", deviceController.getAllDevice)
deviceRouter.get("/:deviceId", auth, deviceController.getDeviceByDeviceId)
deviceRouter.put("/:deviceId", auth, deviceController.updateDeviceByDeviceId);
deviceRouter.post("/:deviceId", auth, deviceController.updateStateHistoryByDeviceId);
deviceRouter.delete("/:deviceId", auth, deviceController.deleteDeviceByDeviceId);



module.exports = deviceRouter;