import axios from "axios";
import Fingerprint2 from "fingerprintjs2";
import { createAction } from "@reduxjs/toolkit";
import { getStore } from "../../";
import userAgentParser from 'ua-parser-js';

export const boot = createAction("SYSTEM/BOOT");
export const reset = createAction("SYSTEM/RESET");
export const tick = createAction("SYSTEM/TICK");
export const systemSays = createAction("SYSTEM/SAYS");
export const setFingerprint = createAction("SYSTEM/SET/FINGERPRINT");
export const setIpgeo = createAction("SYSTEM/SET/IPGEO");
export const ipgeoError = createAction("SYSTEM/IPGEO/ERROR");
export const showUserAtTick = createAction("SYSTEM/BOOT/SHOWUSERATTICK");
export const newVisit = createAction("SYSTEM/NEW/VISIT");

// export const updateCamera = createAction("SYSTEM/CAMERA/UPDATE");
// export const openCamera = createAction("SYSTEM/CAMERA/OPEN");
// export const closeCamera = createAction("SYSTEM/CAMERA/CLOSE");
// export const toggleCamera = createAction("SYSTEM/CAMERA/TOGGLE");

export const openUserEntity = createAction("SYSTEM/USERENTITY/OPEN");
export const closeUserEntity = createAction("SYSTEM/USERENTITY/CLOSE");
export const toggleUserEntity = createAction("SYSTEM/USERENTITY/TOGGLE");
export const mapComplete = createAction("SYSTEM/USERENTITY/MAP_COMPLETE");

export const createFingerprint = () => {
    const store = getStore();
    Fingerprint2.getPromise().then(function (components) {
        const values = components.map(function (component) {
            return component.value;
        });
      const fingerprint = Fingerprint2.x64hash128(values.join(""), 31);
      let userAgent = userAgentParser(components.find(o => o.key === 'userAgent').value);
      store.dispatch({ type: "SYSTEM/SET/FINGERPRINT", fingerprint, components, userAgent });
    });
};

export const ipgeolocation = () => {
  
  const store = getStore();
  const { ipgeo } = store.getState().system.userEntity;
  let updateRequired = false;
  if (!ipgeo.data) { updateRequired = true }
  if (!ipgeo.lastFetch) { updateRequired = true }
  if (ipgeo.lastFetch !== null && ipgeo.data !== null) {
    if (Date.now() - ipgeo.lastFetch > 10000) {
      updateRequired = true;
    }
  }
  if (updateRequired) {
    // console.log('Fetch IPGEO')
    axios
      .get(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`)
      .then(function (response) {
        store.dispatch({
          type: "SYSTEM/SET/IPGEO",
          ipgeo: response.data
        });
      })
      .catch(function (error) {
        store.dispatch({
          type: "SYSTEM/IPGEO/ERROR",
          error
        });
      });
  }
};