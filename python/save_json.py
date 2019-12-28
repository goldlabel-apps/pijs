# Save JSON

# import os
import json
import datetime

data = {}
data['people'] = []
data['people'].append({'time': datetime.datetime.now().isoformat()})

# print(data)
# os.chdir(r'../node/pi-firmware/node/build/data/')

with open('envirophat.json', 'w') as outfile:
    json.dump(data, outfile)

print("saved ok")