import { createAction } from '@reduxjs/toolkit';
import { getStore } from "../../";
import axios from "axios";

export const toggleFetching = createAction(`WEATHER/TOGGLE_FETCH`);
export const reset = createAction(`WEATHER/RESET`);
export const save = createAction(`WEATHER/SAVE`);
export const error = createAction(`WEATHER/ERROR`);

export const fetchWeather = () => {
  let updateRequired = false;
  const store = getStore();
  const { weather } = store.getState();

  if (!weather.data) { updateRequired = true }

  if (updateRequired) {
    console.log('FETCH');
    store.dispatch({
      type: `WEATHER/TOGGLE_FETCH`,
      bool: true,
    });
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${process.env.REACT_APP_OPEN_WEATHER}`)
      .then(function (response) {
        store.dispatch({
          type: `WEATHER/SAVE`,
          data: response.data
        });
      })
      .catch(function (error) {
        store.dispatch({
          type: `WEATHER/ERROR`,
          error
        });
      })
      .finally(function () {
        store.dispatch({
          type: `WEATHER/TOGGLE_FETCH`,
          bool: false,
        });
      });
  }
  
  
  //
  // 
  // if (!ipgeo.lastFetch) { updateRequired = true }
  // if (ipgeo.lastFetch !== null && ipgeo.data !== null) {
  //   if (Date.now() - ipgeo.lastFetch > 10000) {
  //     updateRequired = true;
  //   }
  // }
  // if (updateRequired) {
  //   console.log('REACT_APP_OPEN_WEATHER')
  //   axios
  //     .get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139?APPID=${process.env.REACT_APP_OPEN_WEATHER}`)
  //     .then(function (response) {
  //       store.dispatch({
  //         type: `WEATHER/SAVE`,
  //         ipgeo: response.data
  //       });
  //     })
  //     .catch(function (error) {
  //       store.dispatch({
  //         type: `WEATHER/ERROR`,
  //         error
  //       });
  //     });
  // }
};

// export const checkFingerprint = (fingerprint) => {
  // console.log(fingerprint)
  // const store = getStore();
// };
