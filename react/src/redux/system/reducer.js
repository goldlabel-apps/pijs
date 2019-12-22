// System Reducer

import { createReducer } from "@reduxjs/toolkit";
import {
  systemWebcamUpdate,
  systemOpenNav,
  systemCloseNav,
  systemOpenSettings,
  systemCloseSettings
} from "./actions";

export const systemSlice = {
  settings: {
    open: false
  },
  nav: {
    open: false
  },
  webcam: {
    updated: Date.now(),
    open: true,
    running: true,
    timerDelay: 10
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
  [systemOpenSettings]: state => {
    state.settings.open = true;
    return state;
  },

  [systemCloseSettings]: state => {
    state.settings.open = false;
    return state;
  },

  [systemWebcamUpdate]: state => {
    state.webcam.updated = Date.now();
    return state;
  },

  [systemOpenNav]: state => {
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
