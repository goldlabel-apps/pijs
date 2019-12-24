// Mapbox Reducer

import { createReducer } from "@reduxjs/toolkit";
import { doSomething } from "./actions";

export const mapboxSlice = {
  updated: Date.now(),
  lat: 0,
  lng: 0,
  zoom: 1,
  flySpeed: 0.5,
  hasZoomed: false
};

const mapbox = createReducer(mapboxSlice, {
  [doSomething]: (state, action) => {
    // console.log ('mapbox action', action)
    return state;
  }
});

export { mapbox };
