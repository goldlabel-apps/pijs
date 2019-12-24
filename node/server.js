const packageJSON = require("./package.json");
const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const express = require("express");

const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/pi.listingslab.io/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/pi.listingslab.io/cert.pem",
  "utf8"
);
const ca = fs.readFileSync(
  "/etc/letsencrypt/live/pi.listingslab.io/chain.pem",
  "utf8"
);

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

const app = express();
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.use(express.static(path.join(__dirname + "/build")));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.all("/pijs", function(req, res) {
  const pijs = {
    version: packageJSON.version,
    description: packageJSON.description,
    hardware: `Raspberry Pi 4 Model B (4 GB)`,
    location: {
      time: Date.now(),
      region: `Scarborough`,
      state: `QLD`,
      country: `Australia`,
      lat: -27.211579,
      lng: 153.107658
    },
    mods: [`webcam`, `map`, `weather`],
    repo: packageJSON.repository.url
  };
  res.send(JSON.stringify({ pijs }, null, 4));
});

app.all("/", function(req, res) {
  if (req.secure) {
    res.sendFile(path.join(__dirname + "/build/react.html"));
  } else {
    res.redirect("https://" + req.headers.host + req.url);
  }
});

app.all("/webcam", function(req, res) {
  if (req.secure) {
    res.sendFile(path.join(__dirname + "/build/react.html"));
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
