# Save JSON

import os
import json
import datetime

data = {}
data['people'] = []
data['people'].append({
    'name': 'Scott',
    'time': datetime.datetime.now().isoformat()
})

print(os.path.dirname(os.path.abspath(sys.argv[0])))

# os.chdir(r'../node/pi-firmware/node/build/data/')

# with open('envirophat.json', 'w') as outfile:
#     json.dump(data, outfile)