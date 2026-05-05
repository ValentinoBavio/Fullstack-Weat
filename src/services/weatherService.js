const axios = require("axios");

const API_KEY = process.env.WEATHER_API_KEY;

// 🔹 POR CIUDAD
exports.getWeather = async (city) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    },
  );

  const data = response.data;

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feels_like: data.main.feels_like,
    weather: data.weather[0].description,
    humidity: data.main.humidity,
    wind_speed: data.wind.speed,
  };
};

// 🔹 POR COORDENADAS
exports.getWeatherByCoords = async (lat, lon) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    },
  );

  const data = response.data;

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feels_like: data.main.feels_like,
    weather: data.weather[0].description,
    humidity: data.main.humidity,
    wind_speed: data.wind.speed,
  };
};
