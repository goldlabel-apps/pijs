#!/bin/bash


# -ae 64,0xff,0x808000 -a "Pi Node Server"
# --drc high
# --imxfx  negative

raspistill  --imxfx none --drc high -vf -hf -v -w 800 -h 450 -q 80 -o ~/Desktop/node/pi-firmware/node/build/jpg/current-photo.jpg
