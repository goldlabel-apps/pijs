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
  mapComplete,
  toggleUserEntity,
  openUserEntity,
  closeUserEntity,
} from "./actions";

export const systemSlice = {

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
    zoom: 6,
    flySpeed: 0.4,
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
    if (!oldFingerprint) {
      state.userEntity.created = Date.now();
    }
    state.userEntity.data = {
      updated: Date.now(),
      fingerprint: action.fingerprint,
      oldFingerprint,
      components: action.components,
      userAgent: action.userAgent,
    };
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

  [toggleUserEntity]: (state) => {
    state.userEntity.updated = Date.now();
    state.userEntity.open = !state.userEntity.open;
    return state;
  },
  
  [reset]: () => {
    return systemSlice;
  }, 

});

export { system };
