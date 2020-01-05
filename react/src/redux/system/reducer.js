import { createReducer } from "@reduxjs/toolkit";
import {
  boot,
  tick,
  setFingerprint,
  systemSays,
  setIpgeo,
  showUserAtTick,
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
    fingerprint: {
      value: null,
      components: null,
    },
    ipgeo: null,
  }
};

const system = createReducer(systemSlice, {

  [showUserAtTick]: (state, action) => {
    // console.log('showUserAtTick', action.ticks)
    state.boot.userShownAtTick = action.ticks;
    return state;
  },

  [setIpgeo]: (state, action) => {
    state.userEntity.ipgeo = action.ipgeo;
    return state;
  },
  
  [setFingerprint]: (state, action) => {
    state.userEntity.fingerprint = {
      value: action.fingerprint,
      components: action.components,
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

});

export { system };
