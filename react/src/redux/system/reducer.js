// System Reducer

import { createReducer } from "@reduxjs/toolkit";
import { systemWebcamUpdate, systemOpenNav, systemCloseNav } from "./actions";

export const systemSlice = {
  nav: {
    open: false
  },
  webcam: {
    updated: Date.now(),
    open: true,
    running: true,
    timerDelay: 12
  },
  map: {
    mapboxStyle: `mapbox://styles/listingslab/ck453ks7712qe1cpj00eseqn5`,
    open: true
  },
  temperature: {
    open: true
  },
  humidity: {
    open: true
  },
  pressure: {
    open: true
  },
  cloud: {
    open: true
  }
};

const system = createReducer(systemSlice, {
  [systemWebcamUpdate]: state => {
    // console.log ('SYSTEM/WEBCAM/UPDATE')
    state.webcam.updated = Date.now();
    return state;
  },
  [systemOpenNav]: state => {
    // console.log("SYSTEM/NAV/OPEN");
    state.nav.open = true;
    return state;
  },
  [systemCloseNav]: state => {
    // console.log("SYSTEM/NAV/CLOSE");
    state.nav.open = false;
    return state;
  }
});

export { system };
