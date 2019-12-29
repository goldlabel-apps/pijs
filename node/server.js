const packageJSON = require("./package.json");
const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const express = require("express");

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

app.all("*", function(req, res) {
  if (req.secure) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.sendFile(path.join(__dirname + "/build/index.html"));
  } else {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.redirect("https://" + req.headers.host + req.url);
  }
});

httpsServer.listen(443, () => {
  console.log("HTTPS Server port 443");
});
