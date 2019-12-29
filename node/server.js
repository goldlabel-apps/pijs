const packageJSON = require("./package.json");
const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const express = require("express");
const cors = require("cors");

const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/pijs.app/privkey.pem",
  "utf8"
);

const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/pijs.app/cert.pem",
  "utf8"
);

const ca = fs.readFileSync("/etc/letsencrypt/live/pijs.app/chain.pem", "utf8");

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

const app = express();
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.use(express.static(path.join(__dirname + "/build")));

app.use(cors);

app.all("*", function(req, res) {
  if (req.secure) {
    res.sendFile(path.join(__dirname + "/build/index.html"));
  } else {
    res.redirect("https://" + req.headers.host + req.url);
  }
});

httpServer.listen(1337, () => {
  console.log("HTTP Server running on port 1337");
});

httpsServer.listen(443, () => {
  console.log("HTTPS Server running on port 443");
});
