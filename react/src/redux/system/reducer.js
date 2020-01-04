import { createReducer } from "@reduxjs/toolkit";
import {
  boot,
  toggleBoot,
  tick,
} from "./actions";

export const systemSlice = {
  boot: {
    updated: Date.now(),
    open: true,
    status: null,
    booted: false,
    consoleMessage: `ssh pi@pijs.app<br />pi@raspberrypi:~ $`,
    cursorPosition: 0,
    cursorOn: true,
  },
  clockWork: {
    updated: Date.now(),
    tickDelay: 0.5,
    ticks: 0,
  },
  userEntity: {
    updated: Date.now(),
    fingerprint: null,
  }
};

const system = createReducer(systemSlice, {
  
  [tick]: (state) => {
    // console.log('tick', action)
    state.clockWork.ticks++;
    state.boot.cursorOn = !state.boot.cursorOn;
    return state;
  },

  [boot]: (state) => {
    state.boot.status = 'booting'
    return state;
  },

  [toggleBoot]: (state, action) => {
    console.log('toggleBoot', action.open)
    state.open = action.open
    return state;
  },



});

export { system };
