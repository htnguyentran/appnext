// server.js
const next = require("next");
const express = require("express");
const { port, hostname, dev, mongodb_url } = require("./next.config");

const app = next({
  dev: dev !== "production",
  hostname: process.env.HOST || "localhost",
  port: process.env.PORT || port,
});

const handle = app.getRequestHandler();
const handler = require("./handler/index");
const middleware = require("./middleware/index");

app.prepare().then(() => {
  // check index mongodb
  //  repo(client).Indexes("doc", { "index": 1, "index": 1  }) search index numerical

  const MongoClient = require("mongodb").MongoClient;
  const client_mongo = new MongoClient(mongodb_url, {
    useUnifiedTopology: true,
  });

  const server = express();
  const serverHttp = require("http").Server(server);

  server.get("/index", middleware.restrictAccess);
  server.get("/register", middleware.restrictAccess);
  server.get("/home", middleware.restrictAccess);

  server.post("/api/insert", handler.Insert(client_mongo));
  server.get("/api/search", handler.Search(client_mongo));

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  serverHttp.listen(port, (err) => {
    if (err) throw err;
    console.log(`listen on ${port}`);
  });
});
