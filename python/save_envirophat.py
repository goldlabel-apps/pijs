import json
from datetime import datetime
from time import mktime
from envirophat import light, motion, weather, leds

dt = datetime.now()
sec_since_epoch = mktime(dt.timetuple()) + dt.microsecond/1000000.0
unix_epoch = sec_since_epoch * 1000

data = {}
data['environPhat'] = []

data['environPhat'].append({
    'time': round(unix_epoch)
})

data['environPhat'].append({
    'lux': light.light()
})

with open('./node/build/data/envirophat.json', 'w') as outfile:
    json.dump(data, outfile)

print("New File Saved https://pi.listingslab.io/data/envirophat.json")
