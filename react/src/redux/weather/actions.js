// Open Weather Actions
import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getStore } from "../../";

export const saveWeather = createAction("WEATHER/SAVE");
// export const getWeather = createAction('WEATHER/ERROR')

export const getWeather = () => {
  console.log('getWeather')
  const store = getStore();
  const lat = -27.19;
  const lon = 153.11;
  const baseURL = `https://api.openweathermap.org/data/2.5/weather`;
  const endpoint = `${baseURL}?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_OPEN_WEATHER}`;
  axios
    .get(endpoint)
    .then(function (response) {
      store.dispatch({ type: "WEATHER/SAVE", data: response.data });
    })
    .catch(function (error) {
      store.dispatch({ type: "WEATHER/ERROR", error });
    });
};
