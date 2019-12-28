import json
import datetime

data = {}
data['environPhat'] = []
data['environPhat'].append({'time': datetime.datetime.now().isoformat()})

with open('./node/build/data/envirophat.json', 'w') as outfile:
    json.dump(data, outfile)

print("envirophat.json saved")