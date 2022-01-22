const express = require("express")

const router = express.Router()

const flightController = require("./controllers/FlightController")

router.post("/flight", flightController.get)

module.exports = router