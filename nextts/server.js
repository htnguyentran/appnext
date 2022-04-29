// server.js
// const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const express = require("express");
const server = express();
const serverHttp = require("http").Server(server);

// define .env.local
const port = process.env.PORT ? "undefined" : 3001;
const hostname = process.env.HOST ? "undefined" : "localhost";

// check index mongodb
//  repo(client).Indexes("doc", { "index": 1, "index": 1  }) search index numerical

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const middleware = require("./middleware/index");

app.prepare().then(() => {
  const MongoClient = require("mongodb").MongoClient;
  const client = new MongoClient(process.env.mongodb_url, {
    useUnifiedTopology: true,
  });

  server.get("/index", middleware.restrictAccess);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  serverHttp.listen(port, (err) => {
    if (err) throw err;
    console.log(`listen on ${port}`);
  });
});
