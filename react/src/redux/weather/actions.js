import { createAction } from '@reduxjs/toolkit';
import { getStore } from "../../";
import axios from "axios";

export const toggleFetching = createAction(`WEATHER/TOGGLE_FETCH`);
export const reset = createAction(`WEATHER/RESET`);
export const save = createAction(`WEATHER/SAVE`);
export const error = createAction(`WEATHER/ERROR`);
export const open = createAction(`WEATHER/OPEN`);
export const close = createAction(`WEATHER/CLOSE`);
export const toggle = createAction(`WEATHER/TOGGLE`);

export const fetchWeather = () => {
  
  let updateRequired = false;
  const store = getStore();
  const { weather } = store.getState();
  if (!weather.data && !weather.fetching) { updateRequired = true }
  const updatedAgo = Date.now() - weather.updated;
  // 1 hour : 3600000
  if (updatedAgo > 3600000) {
    updateRequired = true
  }

  if (updateRequired) {
    store.dispatch({
      type: `WEATHER/TOGGLE_FETCH`,
      bool: true,
    });
    const baseUrl = `https://api.openweathermap.org/data/2.5/`;
    const endPoint = `weather?lat=-27.211579&l&lon=153.107658`;
    axios
      .get(`${baseUrl}${endPoint}&APPID=${process.env.REACT_APP_OPEN_WEATHER}`)
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
