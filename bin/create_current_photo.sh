#!/bin/bash

# Optimised image resolution has h/w ratio = 0.5625

# sm 400x225
# md 800x450, 
# lg 1600x900

raspistill  --imxfx none --drc high -vf -hf -v -w 400 -h 225 -q 75 -o ~/Desktop/node/pi-firmware/node/current-photos/current-photo_sm.jpg

raspistill  --imxfx none --drc high -vf -hf -v -w 800 -h 450 -q 450 -o ~/Desktop/node/pi-firmware/node/current-photos/current-photo_md.jpg

raspistill  --imxfx none --drc high -vf -hf -v -w 1600 -h 900 -q 450 -o ~/Desktop/node/pi-firmware/node/current-photos/current-photo_lg.jpg

# for a laugh, let's try some effects

raspistill  --imxfx solarise --drc high -vf -hf -v -w 400 -h 225 -q 75 -o ~/Desktop/node/pi-firmware/node/current-photos/current-photo_sm_solarise.jpg

raspistill  --imxfx film --drc high -vf -hf -v -w 400 -h 225 -q 75 -o ~/Desktop/node/pi-firmware/node/current-photos/current-photo_sm_film.jpg

# --imxfx  negative

# none: no effect (default)
# negative: invert the image colours
# solarise: solarise the image
# posterise: posterise the image
# whiteboard: whiteboard effect
# blackboard: blackboard effect
# sketch: sketch effect
# denoise: denoise the image
# emboss: emboss the image
# oilpaint: oil paint effect
# hatch: hatch sketch effect
# gpen: graphite sketch effect
# pastel: pastel effect
# watercolour: watercolour effect
# film: film grain effect
# blur: blur the image
# saturation: colour saturate the image
# colourswap: not fully implemented
# washedout: not fully implemented
# colourpoint: not fully implemented
# colourbalance: not fully implemented
# cartoon: not fully implemented