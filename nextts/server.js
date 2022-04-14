// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";

// define .env.local
const port = process.env.PORT ? "undefined" : 3000;
const hostname = process.env.HOST ? "undefined" : "localhost";
const mongodb_url=mongodb://localhost:27017/car

// check index mongodb
//  repo(client).Indexes("doc", { "index": 1, "index": 1  }) search index numerical

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.mongodb_url, { useUnifiedTopology: true });

app.prepare().then(() => {
  createServer(async (req, res) => {
    client.connect(err => {
      if (err) {
          logger.error(new Error("can not connect to mongodb"))
          throw err
      }
      
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
