// System Actions

import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getStore } from "../../";

export const systemWebcamUpdate = createAction("SYSTEM/WEBCAM/UPDATE");
export const systemOpenNav = createAction("SYSTEM/NAV/OPEN");
export const systemCloseNav = createAction("SYSTEM/NAV/CLOSE");

export const systemOpenSettings = createAction("SYSTEM/SETTINGS/OPEN");
export const systemCloseSettings = createAction("SYSTEM/SETTINGS/CLOSE");

export const systemPijsSave = createAction("SYSTEM/PIJS/SAVE");
export const systemPijsToggleFetching = createAction(
  "SYSTEM/PIJS/TOGGLE_FETCH"
);

export const updateWebcam = () => {
  const store = getStore();
  store.dispatch({ type: "SYSTEM/WEBCAM/UPDATE" });
};

export const pingPi = () => {
  console.log("Pinging the pi...");
  const store = getStore();
  store.dispatch({
    type: "SYSTEM/PIJS/TOGGLE_FETCH",
    bool: true
  });
  axios
    .get(`https://pi.listingslab.io/pijs`)
    .then(function(response) {
      store.dispatch({
        type: "SYSTEM/PIJS/SAVE",
        data: response.data
      });
    })
    .catch(function(error) {
      store.dispatch({
        type: "SYSTEM/PIJS/ERROR",
        error
      });
    })
    .finally(function() {
      store.dispatch({
        type: "SYSTEM/PIJS/TOGGLE_FETCH",
        bool: false
      });
    });
};
