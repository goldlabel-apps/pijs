import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
import { getStore } from "../../";

export const openNav = createAction("SYSTEM/NAV/OPEN");
export const closeNav = createAction("SYSTEM/NAV/CLOSE");

export const openSettings = createAction("SYSTEM/SETTINGS/OPEN");
export const closeSettings = createAction("SYSTEM/SETTINGS/CLOSE");

export const updateClock = createAction("SYSTEM/UPDATE/CLOCK");

export const systemPijsSave = createAction("SYSTEM/PIJS/SAVE");
export const systemPijsToggleFetching = createAction(
  "SYSTEM/PIJS/TOGGLE_FETCH"
);

export const pingPi = () => {
  console.log("Pinging the pi...");
  const store = getStore();
  store.dispatch({
    type: "SYSTEM/PIJS/TOGGLE_FETCH",
    bool: true
  });
  axios
    .get(`https://pi.listingslab.io/data/pijs.json`)
    .then(function(response) {
      console.log("response", response);
      store.dispatch({
        type: "SYSTEM/PIJS/SAVE",
        data: response.data
      });
    })
    .catch(function(error) {
      console.log("error", error);
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
