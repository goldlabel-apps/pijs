import { createReducer } from "@reduxjs/toolkit";
import {
  toggleFetching,
  reset,
} from "./actions";

export const weatherSlice = {
  updated: Date.now(),
  fetching: false,
  open: true,
  data: null,
  errors: [],    
};

const weather = createReducer(weatherSlice, {

  [toggleFetching]: (state, action) => {
    console.log('fetching', action.fetching);
    state.updated = Date.now();
    state.fetching = action.fetching;
    return state;
  }, 
  
  [reset]: () => {
    return weatherSlice;
  }, 

});

export { weather };
