#!/bin/bash


# -ae 64,0xff,0x808000 -a "Pi Node Server"
# --drc high
# --imxfx  negative

raspistill  --imxfx none --drc high -vf -hf -v -w 1600 -h 900 -q 70 -o ~/Desktop/node/pi-firmware/node/current-photo.jpg
