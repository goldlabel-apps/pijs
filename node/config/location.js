const moment = require("moment");

const location = {
  time: moment.unix(Date.now() / 1000).format("dddd, MMMM Do YYYY, h:mm:ss a"),
  ip: "141.168.211.166",
  isp: "Telstra Internet",
  country: "Australia",
  region: "Queensland",
  city: "Scarborough",
  lat: "-27.4698",
  lon: "153.025"
};

exports = module.exports = location;
