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
  openUserEntity,
  closeUserEntity,
  mapComplete,
  openCamera,
  closeCamera,
  updateWeather,
  openWeather,
  closeWeather,
} from "./actions";

export const systemSlice = {

  weather: {
    updated: Date.now(),
    open: true,
    data: null,
    errors: [],
  },

  camera: {
    updated: Date.now(),
    open: true,
    currentPhoto: null,
  },

  userEntity: {
    updated: Date.now(),
    open: false,
    data: null,
    errors: [],
    visits: 0,
    created: null,
    lastVisit: null,
    fingerprint: {
      data: {},
    },
    ipgeo: {
      lastFetch: 0,
      data: {},
    }
  },
  clockWork: {
    tickDelay: 0.5,
    ticks: 0,
  },
  mapbox: {
    updated: Date.now(),
    userLocation: null,
    mapboxStyle: `mapbox://styles/listingslab/ck4c1er100to21co6sd5kl563`,
    lat: 0,
    lng: 0,
    zoom: 1,
    flySpeed: 0.5,
    hasZoomed: false
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

  [openUserEntity]: (state) => {
    state.userEntity.open = true;
    return state;
  }, 

  [closeUserEntity]: (state) => {
    state.userEntity.open = false;
    return state;
  }, 

  [newVisit]: (state) => {
    state.userEntity.visits = state.userEntity.visits + 1;
    return state;
  }, 
    
  [updateCamera]: (state) => {
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
  
  [mapComplete]: (state, action) => {
    state.mapbox.updated = Date.now();
    state.mapbox.userLocation = action.userLocation;
    return state;
  },

  [openCamera]: (state) => {
    state.camera.updated = Date.now();
    state.camera.open = true;
    return state;
  },

  [closeCamera]: (state) => {
    state.camera.updated = Date.now();
    state.camera.open = false;
    return state;
  },

  [openWeather]: (state) => {
    state.weather.updated = Date.now();
    state.weather.open = true;
    return state;
  },

  [closeWeather]: (state) => {
    state.weather.updated = Date.now();
    state.weather.open = false;
    return state;
  },

  [updateWeather]: (state) => {
    state.weather.updated = Date.now();
    return state;
  }, 

  
  [reset]: () => {
    return systemSlice;
  }, 

});

export { system };
