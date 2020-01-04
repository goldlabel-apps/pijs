import { createReducer } from "@reduxjs/toolkit";
import {
  systemBoot,
  toggleBoot,
} from "./actions";

export const systemSlice = {
  boot: {
    updated: Date.now(),
    open: true,
    status: null,
    booted: false,
    consoleMessage: `pi@raspberrypi:~ $`,
    cursorPosition: 0,
  },
  userEntity: {
    updated: Date.now(),
    fingerprint: null,
  }
};

const system = createReducer(systemSlice, {

  [toggleBoot]: (state, action) => {
    console.log('toggleBoot', action.open)
    state.open = action.open
    return state;
  },

  [systemBoot]: (state, action) => {
    state.status = 'booting'
    return state;
  },

});

export { system };
