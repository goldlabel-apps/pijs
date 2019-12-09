const express = require("express");
const app = express();
const path = require("path");
const chalk = require("chalk");
const morgan = require("morgan");

const port = 1337;

app.use(express.static(path.join(__dirname + "/build")));

app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.get("/ping", (req, res, next) => {
  res.json({
    location: {},
    environment: {},
    pi: {}
  });
});

app.listen(process.env.PORT || port, () =>
  console.log(
    chalk.yellow(`\nNode server running on http://localhost:${port}\n`)
  )
);
