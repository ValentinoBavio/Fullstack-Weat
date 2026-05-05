const { createClient } = require("redis");
const redisClient = require("../config/redis");

const client = createClient({
  url: process.env.REDIS_URL,
});

//client.connect();

module.exports = client;
