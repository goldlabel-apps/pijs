import { createReducer } from "@reduxjs/toolkit";
import { zoomIn, zoomOut } from "./actions";

export const webcamSlice = {
  updated: Date.now(),
  zoomed: `out`
};

const webcam = createReducer(webcamSlice, {
  [zoomIn]: state => {
    state.updated = Date.now();
    state.zoomed = `in`;
    return state;
  },
  [zoomOut]: state => {
    state.updated = Date.now();
    state.zoomed = `out`;
    return state;
  }
});

export { webcam };
