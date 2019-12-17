// Open Weather Reducer

import { createReducer } from "@reduxjs/toolkit";
import { saveWeather } from "./actions";

export const weatherSlice = {
  updated: null,
  data: null
};

const weather = createReducer(weatherSlice, {
  [saveWeather]: (state, action) => {
    state.updated = Date.now();
    state.data = action.data;
    return state;
  }
});

export { weather };
