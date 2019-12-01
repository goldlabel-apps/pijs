## Listingslab Raspberry Pi Firmware

Grab an SD card, clone this repo onto it and fire up your Pi
to see some seriously wicked shee-it

### Instructions

- [python](./python)

#### How to Run a NodeJS Web Server on a Raspberry Pi

Once you’re all set up with your OS, it’s time to install Node.
From what I’ve read, Rasbian comes with node out of the box,
but we’ll want to make sure we have the most recent build.
To install the latest version of Node, make sure you’re
online and fire up the terminal

```bash
sudo su;
wget -O - https://raw.githubusercontent.com/audstanley/NodeJs-Raspberry-Pi/master/Install-Node.sh | bash;
exit;
node -v;
```

```javascript
const express = require("express");
const app = express();
const path = require("path");
const chalk = require("chalk");
const morgan = require("morgan");

const port = 1337;

app.use("/dist", express.static(path.join(__dirname, "dist")));

app.use(morgan("dev")); // logging

app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.listen(process.env.PORT || port, () =>
  console.log(chalk.blue(`http://localhost:${port}`))
);
```

[source](https://blog.cloudboost.io/how-to-run-a-nodejs-web-server-on-a-raspberry-pi-for-development-3ef9ac0fc02c)
