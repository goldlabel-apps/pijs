# Save JSON

import json
import datetime

data = {}
data['people'] = []
data['people'].append({
    'name': 'Scott',
    'time': datetime.datetime.now().isoformat()
})

with open('../node/build/data/envirophat.json', 'w') as outfile:
    json.dump(data, outfile)