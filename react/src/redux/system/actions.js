// System Actions

import { createAction } from "@reduxjs/toolkit";
import { getStore } from "../../";

export const systemWebcamUpdate = createAction("SYSTEM/WEBCAM/UPDATE");
export const systemOpenNav = createAction("SYSTEM/NAV/OPEN");
export const systemCloseNav = createAction("SYSTEM/NAV/CLOSE");

export const updateWebcam = () => {
  // console.log ('updateWebcam')
  const store = getStore();
  store.dispatch({ type: "SYSTEM/WEBCAM/UPDATE" });
};
