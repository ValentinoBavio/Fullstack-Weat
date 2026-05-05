const express = require("express");
const router = express.Router();

const {
  getWeather,
  getWeatherByCoords,
} = require("../controllers/weatherController");

// ruta original
router.get("/", getWeather);

// 👇 ESTA ES LA NUEVA (clave)
router.get("/coords", getWeatherByCoords);

module.exports = router;
