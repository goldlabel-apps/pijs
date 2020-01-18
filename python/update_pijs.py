import json
from datetime import datetime
from time import mktime
from envirophat import light, motion, weather, leds

dt = datetime.now()
sec_since_epoch = mktime(dt.timetuple()) + dt.microsecond/1000000.0
unix_epoch = sec_since_epoch * 1000

jsonResponse = {}
jsonResponse['updated'] = round(unix_epoch)

pimoroni = {}
pimoroni['lux'] = light.light()
pimoroni['rgb'] = str(light.rgb())[1:-1].replace(' ', '')
pimoroni['temperature'] = weather.temperature()
pimoroni['pressure'] = weather.pressure(unit='hPa')
pimoroni['acc'] = str(motion.accelerometer())[1:-1].replace(' ', '')
pimoroni['heading'] = motion.heading()

jsonResponse['pimoroni'] = pimoroni

with open('./node/pi.json', 'w') as outfile:
    json.dump(jsonResponse, outfile)

print("update successful")


# Only do this during the day. what time does the pi say it is?
# leds.on()
# leds.off()
