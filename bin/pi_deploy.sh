#!/bin/bash

# This is what the deploy process is currently.
# Right now it's a boring and silly manual process

# Build react `yarn build`
# Rename index.html to react.html (long story)
# mv /react/build to /node/build
# commit to git and push
# ssh into the pi
# cd to the correct directory
# git pull