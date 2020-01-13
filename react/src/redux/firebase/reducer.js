import { createReducer } from "@reduxjs/toolkit";
import {
  checked,
  reset,
} from "./actions";

export const firebaseSlice = {
  fingerprint: {
    updated: Date.now(),
    checked: false,
  },
};

const firebase = createReducer(firebaseSlice, {

  [checked]: (state) => {
    state.fingerprint.updated = Date.now();
    state.fingerprint.checked = true;
    return state;
  }, 
  
  [reset]: () => {
    return firebaseSlice;
  }, 

});

export { firebase };
