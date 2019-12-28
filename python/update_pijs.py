import json
from datetime import datetime
from time import mktime
from envirophat import light, weather, leds

# from picamera import PiCamera, Color

dt = datetime.now()
sec_since_epoch = mktime(dt.timetuple()) + dt.microsecond/1000000.0
unix_epoch = sec_since_epoch * 1000

# camera = PiCamera()
# camera.resolution = (800, 450)
# camera.annotate_text = str(round(unix_epoch/1000))
# camera.annotate_text_size = 20
# camera.capture('./node/build/jpg/current-photo.jpg')

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

print("update success https://pi.listingslab.io/data/pijs.json")
