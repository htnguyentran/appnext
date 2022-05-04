const dotenv = require("dotenv");
dotenv.config();

const nextConfig = {
  port: process.env.PORT,
  hostname: process.env.HOST,
  dev: process.env.NODE_ENV,
  mongodb_url:process.env.MONGODB_URL
};

module.exports = nextConfig;
