import { createReducer } from "@reduxjs/toolkit";
import {
  error,
  reset,
  save,
  toggleFetching,
  open,
  close,
  toggle,
} from "./actions";

export const weatherSlice = {
  updated: Date.now(),
  fetching: false,
  open: true,
  data: {
    coord: {},
    wind: {},
    main: {},
    weather: [{

    }],
    sys: {}
  },
  errors: [],
};

const weather = createReducer(weatherSlice, {

  [error]: (state, action) => {
    state.updated = Date.now();
    state.errors.push(action.error);
    return state;
  }, 

  [save]: (state, action) => {
    state.updated = Date.now();
    state.data = action.data;
    return state;
  }, 

  [toggleFetching]: (state, action) => {
    state.updated = Date.now();
    state.fetching = action.bool;
    return state;
  }, 

  [close]: (state) => {
    state.updated = Date.now();
    state.open = false;
    return state;
  },

  [open]: (state) => {
    state.updated = Date.now();
    state.open = true;
    return state;
  },

  [toggle]: (state) => {
    state.updated = Date.now();
    state.open = !state.open;
    return state;
  },
  
  [reset]: () => {
    return weatherSlice;
  }, 

});

export { weather };

/*
  [openWeather]: (state) => {
    state.weather.updated = Date.now();
    state.weather.open = true;
    return state;
  },



  [updateWeather]: (state) => {
    state.weather.updated = Date.now();
    return state;
  },
*/