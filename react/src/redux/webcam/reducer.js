import { createReducer } from "@reduxjs/toolkit";
import { zoomIn, zoomOut, updatePhoto } from "./actions";

export const webcamSlice = {
  updated: Date.now(),
  currentPhotoURL: `https://pijs.app/jpg/current-photo.jpg?cb=${Date.now()}`,
  zoomed: `out`
};

const webcam = createReducer(webcamSlice, {
  
  [updatePhoto]: state => {
    state.updated = Date.now();
    state.currentPhotoURL = `https://pijs.app/jpg/current-photo.jpg?cb=${Date.now()}`;
    return state;
  },

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
