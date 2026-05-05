require("dotenv").config();

const express = require("express");
const cors = require("cors");

const weatherRoutes = require("./routes/weatherRoutes");

const app = express(); // ✔ SOLO UNA VEZ

const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/weather", weatherRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API running");
});

// listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
