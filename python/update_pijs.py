import json
from datetime import datetime
from time import mktime
from envirophat import light, motion, weather, leds

dt = datetime.now()
sec_since_epoch = mktime(dt.timetuple()) + dt.microsecond/1000000.0
unix_epoch = sec_since_epoch * 1000

data = {}


data['url'] = "https://pi.listingslab.io/data/pijs.json"
data['updated'] = round(unix_epoch)

envirophatData = {}

envirophatData['lux'] = light.light()
leds.on()
envirophatData['rgb'] = str(light.rgb())[1:-1].replace(' ', '')
leds.off()
envirophatData['temperature'] = weather.temperature()
envirophatData['pressure'] = weather.pressure(unit='hPa')

data['envirophat'] = envirophatData

with open('./node/build/data/pijs.json', 'w') as outfile:
    json.dump(data, outfile)

print("pijs updated https://pi.listingslab.io/data/pijs.json")
