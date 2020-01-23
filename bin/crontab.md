## Crontab

Clunkily, the `create_current_photo.sh` script is run every 10 seconds by the the Pi's cron. It works. for now. Here's what you have to do to change it, though...

1. ssh into the pi
   `ssh pi@pi.listingslab.io`

2. edit the crontab
   `crontab -e`

```bash
* * * * *  sleep 5; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 6; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 10; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 11; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 15; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 16; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 20: cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 21; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 25; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 26; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 30; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 31; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 35; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 36; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 40: cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 41; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 45; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 46; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 50: cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 51; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 55; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 56; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 60; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
```

3. Restart the pi
   `sudo reboot`
