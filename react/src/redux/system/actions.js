import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
import { getStore } from "../../";

export const openNav = createAction("SYSTEM/NAV/OPEN");
export const closeNav = createAction("SYSTEM/NAV/CLOSE");

export const openSettings = createAction("SYSTEM/SETTINGS/OPEN");
export const closeSettings = createAction("SYSTEM/SETTINGS/CLOSE");

export const updateClock = createAction("SYSTEM/UPDATE/CLOCK");

export const systemPijsError = createAction("SYSTEM/PIJS/ERROR");
export const systemPijsSave = createAction("SYSTEM/PIJS/SAVE");
export const systemPijsToggleFetching = createAction(
  "SYSTEM/PIJS/TOGGLE_FETCH"
);

export const pingPi = () => {
  const store = getStore();
  store.dispatch({
    type: "SYSTEM/PIJS/TOGGLE_FETCH",
    bool: true
  });

  const baseURL = process.env.REACT_APP_BASEURL;

  axios
    .get(`${baseURL}/data/pijs.json`)
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
