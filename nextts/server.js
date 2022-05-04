// server.js
const next = require("next");
const express = require("express");
const { port, hostname, dev, mongodb_url } = require("./next.config");

// check index mongodb
//  repo(client).Indexes("doc", { "index": 1, "index": 1  }) search index numerical

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
const middleware = require("./middleware/index");

app.prepare().then(() => {

  const MongoClient = require("mongodb").MongoClient;
  const client_mongo = new MongoClient(mongodb_url, {
    useUnifiedTopology: true,
  });

  const server = express();
  const serverHttp = require("http").Server(server);

  server.get("/index", middleware.restrictAccess);
  server.get("/register", middleware.restrictAccess);

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  serverHttp.listen(port, (err) => {
    if (err) throw err;
    console.log(`listen on ${port}`);
  });
});
