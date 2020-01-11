import { createAction } from "@reduxjs/toolkit";
// import { getStore } from "../../";
// import { db } from '../../fire';

export const reset = createAction("FIREBASE/RESET");
export const setChecked = createAction("FIREBASE/FINGERPRINT/SET");

export const checkFingerprint = (fingerprint) => {
  // console.log(fingerprint)
  // const store = getStore();
};
