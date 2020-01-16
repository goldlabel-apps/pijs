const packageJSON = require("./package.json");
const path = require("path");
const http = require("http");
const express = require("express");
const moment = require("moment");
const cors = require('cors');

const app = express();
app.use(cors())

const httpServer = http.createServer(app);

app.all("/current-photo", function (req, res) {
  res.sendFile(__dirname + '/current-photo.jpg');
});

app.all("*", function (req, res) {
  const r = {
    name: packageJSON.name,
    version: packageJSON.version,
    description: packageJSON.description,
    time: moment(Date.now()).format(`ddd, MMM Do, h:mm a`),
    data: [
      {
          title: `Node`,
          type: `paragraph`,
          body: `Find out about Node JS`,
          link: `https://nodejs.org/en/about`
      },
    ],
    errors: [
      {
          code: `e0001`,
          problem: `Setup required`,
          action: `do stuff`,
      }
    ],
  }
  res.setHeader(`Content-Type`, `application/json`);
  res.send(JSON.stringify(r, null, 3))
});

httpServer.listen(1337, () => {
  console.log("PiJS is running on http://localhost:1337");
});
