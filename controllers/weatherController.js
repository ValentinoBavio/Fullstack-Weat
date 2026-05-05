const weatherService = require("../../services/weatherService");

exports.getWeather = async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const data = await weatherService.getWeather(city);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
