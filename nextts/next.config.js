const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

const nextConfig = {
  port: process.env.PORT,
  hostname: process.env.HOST,
  dev: process.env.NODE_ENV,
  mongodb_url: process.env.MONGODB_URL,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
