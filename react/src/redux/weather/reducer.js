import { createReducer } from "@reduxjs/toolkit";
import {
  setChecked,
  reset,
} from "./actions";

export const firebaseSlice = {
  fingerprint: {
    updated: Date.now(),
    checked: false,
  },
};

const firebase = createReducer(firebaseSlice, {

  [setChecked]: (state, action) => {
    // console.log('check complete');
    state.fingerprint.updated = Date.now();
    state.fingerprint.checked = action.checked;
    return state;
  }, 
  
  [reset]: () => {
    return firebaseSlice;
  }, 

});

export { firebase };
