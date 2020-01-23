/* 
    Node/Express Server with letsencrypt SSL
*/
const packageJSON = require("./package.json");
const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const express = require("express");
const moment = require("moment");
const cors = require("cors");

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
app.use(cors());

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.all("/current-photo", function(req, res) {
  res.sendFile(__dirname + "/current-photos/current-photo_sm.jpg");
});

app.all("/current-photo/sm", function(req, res) {
  res.sendFile(__dirname + "/current-photos/current-photo_sm.jpg");
});

app.all("/current-photo/sm/negative", function(req, res) {
  res.sendFile(__dirname + "/current-photos/current-photo_sm_negative.jpg");
});

app.all("/current-photo/sm/film", function(req, res) {
  res.sendFile(__dirname + "/current-photos/current-photo_sm_film.jpg");
});

app.all("/current-photo/sm/solarise", function(req, res) {
  res.sendFile(__dirname + "/current-photos/current-photo_sm_solarise.jpg");
});

app.all("/current-photo/md/", function(req, res) {
  res.sendFile(__dirname + "/current-photos/current-photo_md.jpg");
});

app.all("/current-photo/lg/", function(req, res) {
  res.sendFile(__dirname + "/current-photos/current-photo_lg.jpg");
});

app.all("/pimoroni", function(req, res) {
  res.sendFile(__dirname + "/pimoroni.json");
});

app.all("*", function(req, res) {
  if (req.secure) {
    const r = {
      name: `PiJS`,
      url: `https://pi.listingslab.io/`,
      ip: `141.168.211.166`,
      firmwareVersion: packageJSON.version,
      piTime: moment(Date.now()).format(`ddd, MMM Do, h:mm a`),
      piEpoch: Date.now(),
      location: `Scarborough, QLD`,
      lat: -27.211579,
      lng: 153.107658,
      endpoints: [
        {
          title: `Current Photo`,
          path: `/current-photo`
        },
        {
          title: `Enviro pHAT`,
          path: `/pimoroni`
        }
      ]
    };
    res.setHeader(`Content-Type`, `application/json`);
    res.send(JSON.stringify(r, null, 3));
  } else {
    res.redirect("https://" + req.headers.host + req.url);
  }
});

httpServer.listen(1337, () => {
  console.log("HTTP Server listening on port 1337");
});

httpsServer.listen(443, () => {
  console.log("HTTPS Server listening on port 443");
});
