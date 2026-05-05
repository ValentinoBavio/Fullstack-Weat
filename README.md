🌤️ **Weather App (Full Stack)**

A simple full-stack weather application that allows users to check real-time weather information by city. The project includes a Node.js + Express backend and a vanilla JavaScript frontend, deployed and connected through a REST API.



**Features**

Search weather by city

Real-time data using external weather API

Displays temperature, humidity, wind speed, and conditions

Clean and responsive UI

Full REST API integration

Deployed backend on Render

🧠 **Tech Stack**

**Backend**

Node.js/
Express.js/
CORS/
dotenv/
Backend API: https://fullstack-weat.onrender.com

**Frontend**

HTML5/
CSS3/
JavaScript (Fetch API)

Deployment

Render (backend)
(Vercel)

📡 **API Endpoints**
Get Weather by City
GET /api/weather?city={cityName}
Example
/api/weather?city=Buenos Aires
Response Example
{
  "city": "Buenos Aires",
  "country": "AR",
  "temperature": 18.5,
  "feels_like": 18.9,
  "weather": "clear sky",
  "humidity": 82,
  "wind_speed": 1.54
}
