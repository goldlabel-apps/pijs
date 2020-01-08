import { createAction } from "@reduxjs/toolkit";
import { getStore } from "../../";

export const reset = createAction("FIREBASE/RESET");
export const callbackOne = createAction("FIREBASE/ASYNCTHING/COMPLETE");

export const doAsyncThing = () => {
  const store = getStore();
  store.dispatch({ type: "FIREBASE/ASYNCTHING/COMPLETE"});
};
