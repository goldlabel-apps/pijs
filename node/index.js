/*
    Node server for Rasberry Pi
*/

// const packageJSON = require("./package.json");
const fs = require("fs");
const path = require("path");
const https = require("https");
const express = require("express");
const app = express();
const morgan = require("morgan");
const pi = require("./config/pi");
const location = require("./config/location");
const environment = require("./config/environment");
// const ip = `127.0.0.1`;
const ip = `10.0.0.23`;
const port = 1975;
const privateKey = fs.readFileSync("./pi_listingslab_io.key", "utf8");
const certificate = fs.readFileSync("./pi_listingslab_io.crt", "utf8");
const credentials = { key: privateKey, cert: certificate };

// const forceSsl = function(req, res, next) {
//   if (req.headers["x-forwarded-proto"] !== "https") {
//     return res.redirect(["https://", req.get("Host"), req.url].join(""));
//   }
//   return next();
// };
// app.use(forceSsl);

app.use(express.static("build"));
app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  //   res.sendFile(path.join(__dirname + "/build/react.html"));
  res.json({ sent: `dasdef` });
});

app.get("/ping", (req, res, next) => {
  res.json({
    location,
    environment: environment({ noPayload: 123 }),
    pi
  });
});

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, ip);
