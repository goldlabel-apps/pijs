import json
from datetime import datetime
from time import mktime
from envirophat import light, weather, leds

dt = datetime.now()
sec_since_epoch = mktime(dt.timetuple()) + dt.microsecond/1000000.0
unix_epoch = sec_since_epoch * 1000

data = {}

# pimoroni

data['updated'] = round(unix_epoch)
envirophatData = {}
envirophatData['lux'] = light.light()

# Only do this during the day. what time does the pi say it is?
# leds.on()
envirophatData['rgb'] = str(light.rgb())[1:-1].replace(' ', '')
# leds.off()
envirophatData['temperature'] = weather.temperature()
envirophatData['pressure'] = weather.pressure(unit='hPa')
data['envirophat'] = envirophatData
with open('./node/pi.json', 'w') as outfile:
    json.dump(data, outfile)

print("update success https://pijs.app/data/pijs.json")
