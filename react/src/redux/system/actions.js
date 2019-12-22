// System Actions

import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getStore } from "../../";

export const systemWebcamUpdate = createAction("SYSTEM/WEBCAM/UPDATE");
export const systemOpenNav = createAction("SYSTEM/NAV/OPEN");
export const systemCloseNav = createAction("SYSTEM/NAV/CLOSE");

export const systemOpenSettings = createAction("SYSTEM/SETTINGS/OPEN");
export const systemCloseSettings = createAction("SYSTEM/SETTINGS/CLOSE");

export const updateWebcam = () => {
  const store = getStore();
  store.dispatch({ type: "SYSTEM/WEBCAM/UPDATE" });
};

export const pingPi = () => {
  console.log("Pinging the pi...");
  //   const store = getStore();
  axios
    .get(`https://pi.listingslab.io/pijs`)
    .then(function(response) {
      console.log(response);
      //   store.dispatch({
      //     type: "WEATHER/SAVE",
      //     data: response.data
      //   });
    })
    .catch(function(error) {
      console.log(error);
      //   store.dispatch({
      //     type: "WEATHER/ERROR",
      //     error
      //   });
    });
};
