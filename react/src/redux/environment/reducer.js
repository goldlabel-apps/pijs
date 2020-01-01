import { createReducer } from "@reduxjs/toolkit";
import { updateEnvironment } from "./actions";

export const environmentSlice = {
  settings: {
    updated: Date.now(),
    open: false
  }
};

const environment = createReducer(environmentSlice, {
  [updateEnvironment]: state => {
    state.nav.open = true;
    return state;
  }
});

export { environment };
