## Crontab

Clunkily, the `create_current_photo.sh` script is run every 10 seconds by the the Pi's cron. It works. for now. Here's what you have to do to change it, though...

1. ssh into the pi
   `ssh pi@pi.listingslab.io`

2. edit the crontab
   `crontab -e`

```bash
* * * * *  sleep 0; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 3; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 6; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 9; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 12; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 15; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 18; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 21; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 24; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 27; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 30; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 33; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 36; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 39; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 42; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 45; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 48; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 51; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 54; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 57; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh
* * * * *  sleep 60; ~/Desktop/node/pi-firmware/bin/create_current_photo.sh

* * * * *  sleep 5; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 10; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 15; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 20: cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 25; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 30; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 35; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 40: cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 45; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 50: cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 55; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py
* * * * *  sleep 60; cd ~/Desktop/node/pi-firmware && python ./python/update_pijs.py

```

3. Restart the pi
   `sudo reboot`
