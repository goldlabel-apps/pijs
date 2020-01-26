/* 
    Node/Express Server with letsencrypt SSL
*/
const packageJSON = require("./package.json");
const fs = require("fs");
// const endpoint = require("endpoint");
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

app.all("/current-photo/negative", function(req, res) {
  res.sendFile(__dirname + "/current-photos/current-photo_negative.jpg");
});

app.all("/current-photo/blackboard", function(req, res) {
  res.sendFile(__dirname + "/current-photos/current-photo_blackboard.jpg");
});

app.all("/current-photo/cartoon", function(req, res) {
  res.sendFile(__dirname + "/current-photos/current-photo_cartoon.jpg");
});

app.all("/current-photo/film", function(req, res) {
  res.sendFile(__dirname + "/current-photos/current-photo_film.jpg");
});

app.all("/current-photo/sm", function(req, res) {
  res.sendFile(__dirname + "/current-photos/current-photo_sm.jpg");
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
  const endpointBase = `https://pi.listingslab.io/`;
  if (req.secure) {
    const r = {
      name: `pi.listingslab.io`,
      url: `${endpointBase}`,
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
          endpoint: `${endpointBase}current-photo/`,
          resolution: [
            {
              sm: `${endpointBase}current-photo/sm/`,
              md: `${endpointBase}current-photo/md/`,
              lg: `${endpointBase}current-photo/lg/`
            }
          ],
          effects: [
            {
              title: `Negative`,
              description: `Inverts the image colours`,
              endpoint: `${endpointBase}current-photo/negative`
            },
            {
              title: `Blackboard`,
              endpoint: `${endpointBase}current-photo/blackboard`
            },
            {
              title: `Film`,
              description: `Add a film grain`,
              endpoint: `${endpointBase}current-photo/film`
            },
            {
              title: `Cartoom`,
              description: `Not fully implemented`,
              endpoint: `${endpointBase}current-photo/cartoon`
            }
          ]
        },
        {
          title: `Pimoroni Enviro pHAT`,
          description: `Updated every 3 seconds`,
          endpoint: `${endpointBase}pimoroni`
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
