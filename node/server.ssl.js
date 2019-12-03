const express = require('express');
const forceSSL = require('express-force-ssl');
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const chalk = require('chalk');
const morgan = require('morgan');

const port = 1337;


const ssl_options = {
  key: fs.readFileSync(path.join(__dirname + '/pi_listingslab_io.key')),
  cert: fs.readFileSync(path.join(__dirname + '/pi_listingslab_io.crt')),
};

const app = express();
const server = http.createServer(app);
const secureServer = https.createServer(ssl_options, app);

app.use(express.static(path.join(__dirname + '/build')))
app.use(forceSSL);
app.use(morgan('dev'));

secureServer.listen(443)
server.listen(port)

app.listen(80);
