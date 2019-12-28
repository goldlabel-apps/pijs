import { createReducer } from "@reduxjs/toolkit";
import {
  openNav,
  closeNav,
  openSettings,
  closeSettings,
  updateClock
} from "./actions";

export const systemSlice = {
  settings: {
    updated: Date.now(),
    open: false
  },
  nav: {
    updated: Date.now(),
    open: false
  },
  clockwork: {
    updated: Date.now(),
    started: Date.now()
  }
};

const system = createReducer(systemSlice, {
  [updateClock]: state => {
    state.clockwork.updated = Date.now();
    return state;
  },
  [openSettings]: state => {
    state.settings.open = true;
    return state;
  },

  [closeSettings]: state => {
    state.settings.open = false;
    return state;
  },

  [openNav]: state => {
    state.nav.open = true;
    return state;
  },

  [closeNav]: state => {
    // console.log("SYSTEM/NAV/CLOSE");
    state.nav.open = false;
    return state;
  }
});

export { system };
