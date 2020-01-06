import { createReducer } from "@reduxjs/toolkit";
import {
  boot,
  newVisit,
  setFingerprint,
  systemSays,
  setIpgeo,
  showUserAtTick,
  tick,
} from "./actions";

export const systemSlice = {
  boot: {
    updated: Date.now(),
    open: true,
    booted: false,
    userShownAtTick: null,
    consoleMessage: ``,
    cursorOn: true,
  },
  clockWork: {
    updated: Date.now(),
    tickDelay: 0.5,
    ticks: 0,
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
    ipgeo: null,
    ipgeoUpdated: null,
  }
};

const system = createReducer(systemSlice, {

  [newVisit]: (state) => {
    // console.log('newVisit', state.userEntity.visits)
    state.userEntity.visits = state.userEntity.visits + 1;
    return state;
  }, 

  [showUserAtTick]: (state, action) => {
    state.boot.userShownAtTick = action.ticks;
    return state;
  },

  [setIpgeo]: (state, action) => {
    state.userEntity.ipgeo = action.ipgeo;
    state.userEntity.ipgeoUpdated = Date.now();
    return state;
  },

  [setFingerprint]: (state, action) => {
    const oldFingerprint = state.userEntity.fingerprint.value
    let newFingerprint = {
      updated: Date.now(),
      value: action.fingerprint,
      oldFingerprint,
      components: action.components,
    }
    if (!oldFingerprint) {
      state.userEntity.created = Date.now();
    }

    // console.log('newFingerprint', action.fingerprint);
    // console.log('oldFingerprint', oldFingerprint);
    // if (oldFingerprint) {
    // }
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

});

export { system };
