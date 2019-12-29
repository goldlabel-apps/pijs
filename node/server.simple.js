const packageJSON = require("./package.json");
const path = require("path");
const http = require("http");
const express = require("express");

const app = express();
const httpServer = http.createServer(app);
app.use(express.static(path.join(__dirname + "/build")));

app.all("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

httpServer.listen(1337, () => {
  console.log("PiJS is running on http://localhost:1337");
});
