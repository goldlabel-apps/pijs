const packageJSON = require("./package.json");
const fs = require("fs");
const path = require("path");
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
app.use(cors());

const httpsServer = https.createServer(credentials, app);

app.use(express.static(path.join(__dirname + "/build")));

app.all("*", function(req, res) {
  if (req.secure) {
    res.sendFile(path.join(__dirname + "/build/index.html"));
  } else {
    res.redirect("https://" + req.headers.host + req.url);
  }
});

httpsServer.listen(443, () => {
  console.log("HTTPS Server port 443");
});
