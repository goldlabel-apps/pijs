// import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
import Fingerprint2 from "fingerprintjs2";
import { getStore } from "../../";

export const updateFingerprint = createAction("USERENTITY/UPDATE/FINGERPRINT");
export const doShit = createAction("DO/SHIT");

export const createFingerprint = () => {
  const store = getStore();
  Fingerprint2.getPromise().then(function(components) {
    const values = components.map(function(component) {
      return component.value;
    });
    const fingerprint = Fingerprint2.x64hash128(values.join(""), 31);
    store.dispatch({ type: "USERENTITY/UPDATE/FINGERPRINT", fingerprint });
  });
};

// export const systemPijsToggleFetching = createAction("USERENTITY/TOGGLE_FETCH");
// export const pingPi = () => {
//   const store = getStore();
//   store.dispatch({
//     type: "SYSTEM/PIJS/TOGGLE_FETCH",
//     bool: true
//   });

//   const baseURL = process.env.REACT_APP_BASEURL;

//   axios
//     .get(`${baseURL}/data/pijs.json?cb=${Date.now()}`)
//     .then(function(response) {
//       store.dispatch({
//         type: "SYSTEM/PIJS/SAVE",
//         data: response.data
//       });
//     })
//     .catch(function(error) {
//       store.dispatch({
//         type: "SYSTEM/PIJS/ERROR",
//         error
//       });
//     })
//     .finally(function() {
//       store.dispatch({
//         type: "SYSTEM/PIJS/TOGGLE_FETCH",
//         bool: false
//       });
//     });
// };
