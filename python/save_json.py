# Save JSON

import json
import datetime

data = {}
data['people'] = []
data['people'].append({
    'name': 'Scott',
    'time': datetime.datetime.now().isoformat()
})

with open('~/Desktop/node/pi-firmware/node/build/data/envirophat.txt',
          'w') as outfile:
    json.dump(data, outfile)