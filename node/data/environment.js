const environment = function(payload) {
  return {
    updated: Date.now() * 1000,
    hatIMX219: {
      enabled: true,
      res: `720p60`,
      noIR: false,
      buy: `https://www.littlebird.com.au/products/raspberry-pi-camera-module-v2-1?variant=14508477186111`
    },
    hatBME680: {
      enabled: true,
      temperature: 25,
      pressure: 1098,
      humidity: 50,
      quality: 95,
      buy: `https://www.littlebird.com.au/products/bme680-breakout-air-quality-temperature-pressure-humidity-sensor?variant=14508049662015`
    }
  };
};

exports = module.exports = environment;
