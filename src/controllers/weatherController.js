const weatherService = require("../services/weatherService");
console.log("CONTROLLER CARGADO");

exports.getWeather = async (req, res) => {
  const { city } = req.query;

  if (!city || city.length < 2) {
    return res.status(400).json({ error: "Invalid city" });
  }

  try {
    const data = await weatherService.getWeather(city);
    res.json(data);
  } catch (err) {
    console.log("ERROR REAL:", err); // 👈 clave

    if (err.response) {
      return res.status(err.response.status).json({
        error: "External API error",
        detail: err.response.data,
      });
    }

    res.status(500).json({ error: "Internal server error" });
  }
};

// 👇 NUEVA FUNCIÓN
exports.getWeatherByCoords = async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: "lat and lon are required" });
  }

  try {
    const data = await weatherService.getWeatherByCoords(lat, lon);
    res.json(data);
  } catch (err) {
    console.log("ERROR REAL:", err); // 👈 clave

    if (err.response) {
      return res.status(err.response.status).json({
        error: "External API error",
        detail: err.response.data,
      });
    }

    res.status(500).json({ error: "Internal server error" });
  }
};
