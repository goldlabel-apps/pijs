import { createAction } from '@reduxjs/toolkit';
import { getStore } from "../../";
import axios from "axios";

export const toggleFetching = createAction(`WEATHER/FETCH/TOGGLE`);
export const reset = createAction(`WEATHER/RESET`);
export const save = createAction(`WEATHER/SAVE`);
export const error = createAction(`WEATHER/ERROR`);

export const fetchWeather = () => {

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
    console.log('REACT_APP_OPEN_WEATHER')
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139?APPID=${process.env.REACT_APP_OPEN_WEATHER}`)
      .then(function (response) {
        store.dispatch({
          type: `WEATHER/SAVE`,
          ipgeo: response.data
        });
      })
      .catch(function (error) {
        store.dispatch({
          type: `WEATHER/ERROR`,
          error
        });
      });
  }
};

// export const checkFingerprint = (fingerprint) => {
  // console.log(fingerprint)
  // const store = getStore();
// };
