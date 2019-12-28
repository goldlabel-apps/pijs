# Save JSON

import json
import datetime

// print(datetime.datetime.now().isoformat())
data = {}
data['people'] = []
data['people'].append({
    'name': 'Scott',
    'website': 'stackabuse.com',
    'from': 'Nebraska'
})

with open('../node/build/data/envirophat.json', 'w') as outfile:
    json.dump(data, outfile)