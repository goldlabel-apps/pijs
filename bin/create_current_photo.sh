#!/bin/bash

# Optimised image resolution has h/w ratio = 0.5625

# sm 400x225
# md 800x450, 
# lg 1600x900

# for a laugh, let's try some effects
# --imxfx  negative

raspistill  --imxfx negative --drc high -vf -hf -v -w 400 -h 225 -q 75 -o ~/Desktop/node/pi-firmware/node/current-photo_sm.jpg

raspistill  --imxfx none --drc high -vf -hf -v -w 400 -h 800 -q 450 -o ~/Desktop/node/pi-firmware/node/current-photo_md.jpg