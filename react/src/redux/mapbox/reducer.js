// Mapbox Reducer

import { createReducer } from "@reduxjs/toolkit";
import { doSomething } from "./actions";

export const mapboxSlice = {
  updated: Date.now(),
  mapboxStyle: `mapbox://styles/listingslab/ck453ks7712qe1cpj00eseqn5`,
  lat: 0,
  lng: 0,
  zoom: 1,
  flySpeed: 0.5,
  hasZoomed: false
};

const mapbox = createReducer(mapboxSlice, {
  [doSomething]: state => {
    return state;
  }
});

export { mapbox };
