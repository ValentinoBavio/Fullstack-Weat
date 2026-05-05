require("dotenv").config();

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const weatherRoutes = require("./routes/weatherRoutes");

const app = express(); // 👈 PRIMERO creás app

app.use(cors()); // 👈 DESPUÉS usás app
app.use(express.json());

app.use("/api/weather", weatherRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
