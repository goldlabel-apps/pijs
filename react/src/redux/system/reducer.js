import { createReducer } from "@reduxjs/toolkit";
import {
  openNav,
  closeNav,
  openSettings,
  closeSettings,
  updateClock,
  systemPijsToggleFetching,
  systemPijsSave
} from "./actions";

export const systemSlice = {
  pijs: {
    data: null,
    fetching: false
  },
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
  [systemPijsToggleFetching]: (state, action) => {
    console.log("reduce SYSTEM/PIJS/TOGGLE_FETCH", action);
    state.pijs.fetching = action.bool;
    return state;
  },

  [systemPijsSave]: (state, action) => {
    console.log("reduce SYSTEM/PIJS/SAVE", action);
    state.pijs.data = action.data;
    return state;
  },

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
    state.nav.open = false;
    return state;
  }
});

export { system };
