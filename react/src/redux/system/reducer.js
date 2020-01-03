import { createReducer } from "@reduxjs/toolkit";
import {
  systemOne
} from "./actions";

export const systemSlice = {
  systemOne: {
    updated: Date.now(),
  },
};

const system = createReducer(systemSlice, {

  [systemOne]: (state, action) => {
    console.log('systemOne', action)
    state.one = true
    return state;
  },

});

export { system };
