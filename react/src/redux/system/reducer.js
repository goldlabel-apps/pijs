import { createReducer } from "@reduxjs/toolkit";
import {
  boot,
  reset,
  newVisit,
  setFingerprint,
  systemSays,
  setIpgeo,
  showUserAtTick,
  tick,
  updateCamera,
} from "./actions";

export const systemSlice = {
  clockWork: {
    tickDelay: 0.5,
    ticks: 0,
  },
  mapbox: {
    updated: Date.now(),
    mapboxStyle: `mapbox://styles/listingslab/ck453ks7712qe1cpj00eseqn5`,
    lat: 0,
    lng: 0,
    zoom: 1,
    flySpeed: 0.5,
    hasZoomed: false
  },
  userEntity: {
    updated: Date.now(),
    visits: 0,
    created: null,
    lastVisit: null,
    fingerprint: {
      value: null,
      components: [],
    },
    ipgeo: {
      lastFetch: 0,
      data: {},
    }
  },
  camera: {
    updated: Date.now(),
    currentPhoto: null,
  },
  boot: {
    updated: Date.now(),
    open: true,
    booted: false,
    userShownAtTick: null,
    consoleMessage: ``,
    cursorOn: true,
  },
};

const system = createReducer(systemSlice, {

  
  [newVisit]: (state) => {
    state.userEntity.visits = state.userEntity.visits + 1;
    return state;
  }, 
    
  [updateCamera]: (state) => {
    // console.log('updateCamera', state.camera)
    if (state.camera) {
      state.camera.updated = Date.now();
      state.camera.currentPhoto = `https://pijs.app/jpg/current-photo.jpg?cb=${Date.now()}`;
    }
    
    return state;
  }, 

  [showUserAtTick]: (state, action) => {
    state.boot.userShownAtTick = action.ticks;
    return state;
  },

  [setIpgeo]: (state, action) => {
    state.userEntity.ipgeo.data = action.ipgeo;
    state.userEntity.ipgeo.lastFetch = Date.now();
    return state;
  },

  [setFingerprint]: (state, action) => {
    const oldFingerprint = state.userEntity.fingerprint.value
    let newFingerprint = {
      updated: Date.now(),
      value: action.fingerprint,
      oldFingerprint,
      components: action.components,
      userAgent: action.userAgent,
    }
    if (!oldFingerprint) {
      state.userEntity.created = Date.now();
    }
    state.userEntity.fingerprint = newFingerprint;
    return state;
  },

  [systemSays]: (state, action) => {
    state.boot.consoleMessage += ` <span style="color: ${action.say.color};">${action.say.message}</span>`;
    return state;
  },

  [tick]: (state) => {
    state.clockWork.ticks++;
    state.boot.cursorOn = !state.boot.cursorOn;
    return state;
  },

  [boot]: (state) => {
    state.boot.booted = true;
    state.boot.status = 'booted';
    return state;
  },
  
  [reset]: () => {
    return systemSlice;
  }, 

});

export { system };
