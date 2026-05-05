require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express(); // 👈 primero se crea

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API running");
});

const weatherRoutes = require("./routes/weatherRoutes");

const app = express(); // 👈 PRIMERO creás app

app.use(cors()); // 👈 DESPUÉS usás app
app.use(express.json());

app.use("/api/weather", weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
