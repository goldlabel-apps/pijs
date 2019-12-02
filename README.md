## Listingslab Raspberry Pi Firmware

Grab an SD card, clone this repo onto it and fire up your Pi
to see some seriously wicked shee-it. [GitHub](https://github.com/listingslab-hardware/pi-firmware)

## What is a Pi?

The Raspberry Pi is a very low cost, credit-card sized computer.
It is a capable little device that enables people of all ages to explore
computing, and to learn how to program in languages like Python.

It also give more experienced developers a chance to do some mad cool shit.
We're going to turn our Pi into a node server connected to Firebase in the cloud

### Install

Create a folder called `node` on your Pi desktop and clone this directory into it,

```bash
cd ~/Desktop
mkdir node && cd node
git clone https://github.com/listingslab-hardware/pi-firmware.git
cd pi-firmware
yarn && cd ./node && yarn && cd ../react && yarn && cd ../ && ls -la
```

### Docs

#### Isomorphic JavaScript

- Progressive Web App
- [Node](./node)
- [React](./react)
- Firebase
  - Firestore
  - Cloud functions

#### Other

- [Python](./python)
- Docker
- Heroku
- Git

```bash
sudo sh -c 'echo 0 > /sys/class/leds/led1/brightness'
```
