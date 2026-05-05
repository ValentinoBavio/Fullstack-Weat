const axios = require("axios");
const redisClient = require("../src/config/redis");

const API_KEY = process.env.WEATHER_API_KEY;

exports.getWeather = async (city) => {
  const cacheKey = `weather:${city.toLowerCase()}`;

  // 1. Check cache
  const cachedData = await redisClient.get(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  // 2. Fetch API
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    },
  );

  const data = response.data;

  // 3. Normalizar respuesta
  const normalized = {
    city: data.name,
    temperature: data.main.temp,
    weather: data.weather[0].description,
    humidity: data.main.humidity,
  };

  // 4. Guardar en cache (TTL 10 min)
  await redisClient.setEx(cacheKey, 600, JSON.stringify(normalized));

  return normalized;
};
