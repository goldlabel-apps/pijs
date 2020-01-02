import { createReducer } from "@reduxjs/toolkit";
import { doShit, updateFingerprint } from "./actions";

export const userEntitySlice = {
  fingerprint: null
};

const userEntity = createReducer(userEntitySlice, {
  [doShit]: state => {
    console.log("doShit");
    return state;
  },

  [updateFingerprint]: (state, action) => {
    // console.log("updateFingerprint", action.fingerprint);
    state.fingerprint = action.fingerprint;
    return state;
  }
});

export { userEntity };
