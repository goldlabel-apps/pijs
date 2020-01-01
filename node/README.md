## Node

```bash
# Takes a photo and save it to the server
~/Desktop/node/pi-firmware/bin/create_current_photo.sh
```

### What is Node JS?

As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.

### What is this directory for?

This is a little Node/express server designed to be exposed to the big. scary, wide world on port 1337 mapped to the url [pijs.app](https://pijs.app). Once you have everything set up on your pi you can run this server.

```bash
node ~/Desktop/node/pi-firmware/node/server.js

# Takes a photo and save it to the server
~/Desktop/node/pi-firmware/bin/create_current_photo.sh
```

Of course, you'll want the server to start everytime the pi boots and we do that like this...

```bash
sudo nano /etc/rc.local
```

Then add this line about the exit line and reboot

```bash
su pi -c 'node ~/Desktop/node/pi-firmware/node/server.js < /dev/null &'
sudo reboot
```

Once your machine is up and running again, you should be able to navigate to `localhost:1337` and see the site without needing the terminal.

### How to Run a NodeJS Web Server on a Raspberry Pi

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

### Create Express Server

`/node/server.js`

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

## SSL

Google displays sites not protected by SSL Certificates as ‘Not Secure’. They also rank websites with SSL higher in search results over those that don’t have them. With this in mind, ‘cheap SSL’ means so much more, because the cost of losing customers is high.

[source: cloudboost.io](https://blog.cloudboost.io/how-to-run-a-nodejs-web-server-on-a-raspberry-pi-for-development-3ef9ac0fc02c)

[UP](../)
