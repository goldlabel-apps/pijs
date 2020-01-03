import { createReducer } from "@reduxjs/toolkit";
import {
  systemOne,
} from "./actions";

export const systemSlice = {
  systemOne: {
    updated: Date.now(),
  },
};

const system = createReducer(systemSlice, {
  [systemOne]: (state, action) => {
    state.systemOne.error = `action.error;`
    return state;
  },
});

export { system };
