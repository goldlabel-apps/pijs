import { createReducer } from "@reduxjs/toolkit";
import {
  openNav,
  closeNav,
  updateClock,
  systemPijsToggleFetching,
  systemPijsSave,
  systemPijsError
} from "./actions";

export const systemSlice = {
  pijs: {
    data: null,
    fetching: false,
    status: `disconnected`
  },
  nav: {
    updated: Date.now(),
    open: false
  },
  clockwork: {
    updated: Date.now(),
    started: Date.now(),
    ticks: 0
  }
};

const system = createReducer(systemSlice, {
  [systemPijsError]: (state, action) => {
    state.pijs.error = action.error;
    state.pijs.status = `disconnected`;
    return state;
  },

  [systemPijsToggleFetching]: (state, action) => {
    state.pijs.fetching = action.bool;
    return state;
  },

  [systemPijsSave]: (state, action) => {
    state.pijs.data = action.data;
    state.pijs.status = `connected`;
    return state;
  },

  [updateClock]: state => {
    state.clockwork.updated = Date.now();
    state.clockwork.ticks = state.clockwork.ticks + 1;
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
