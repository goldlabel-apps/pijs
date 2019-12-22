const packageJSON = require("./package.json");
const path = require("path");
const http = require("http");
const express = require("express");

const app = express();
const httpServer = http.createServer(app);
app.use(express.static(path.join(__dirname + "/build")));

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
  res.sendFile(path.join(__dirname + "/build/react.html"));
});

httpServer.listen(1337, () => {
  console.log("HTTP Server running on port 1337");
});
