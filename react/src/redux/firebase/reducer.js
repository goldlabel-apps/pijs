import { createReducer } from "@reduxjs/toolkit";
import {
  callbackOne,
  reset,
} from "./actions";

export const firebaseSlice = {
  stuff: {
    updated: Date.now(),
  },
};

const firebase = createReducer(firebaseSlice, {

  [callbackOne]: (state) => {
    state.stuff.updated = Date.now();
    return state;
  }, 
  
  [reset]: () => {
    return firebaseSlice;
  }, 

});

export { firebase };
