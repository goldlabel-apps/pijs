const express = require("express");
const app = express();
const path = require("path");
const chalk = require("chalk");
const morgan = require("morgan");

const port = 1337;

app.use(express.static("build"));
app.use(morgan("dev"));
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(process.env.PORT || port, () =>
  console.log(chalk.blue(`http://localhost:${port}`))
);
