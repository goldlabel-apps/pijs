import { createReducer } from "@reduxjs/toolkit";
import {
  update,
  broken,
  open,
  close,
  toggle,
  error,
  reset,
} from "./actions";

export const cameraSlice = {
  updated: Date.now(),
  open: true,
  currentPhoto: null,
  errors: [],
};

const camera = createReducer(cameraSlice, {

  [update]: (state) => {
    state.updated = Date.now();
    state.currentPhoto = `https://pijs.app/jpg/current-photo.jpg?cb=${Date.now()}`;
    return state;
  }, 

  [broken]: (state) => {
    state.updated = Date.now();
    state.currentPhoto = `/jpg/broken.jpg`;
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

  [error]: (state, action) => {
    state.updated = Date.now();
    state.errors.push(action.error);
    return state;
  }, 
  
  [reset]: () => {
    return cameraSlice;
  }, 

});

export { camera };

  
  
    // [updateCamera]: (state) => {
  //   if (state.camera) {
  //     state.camera.updated = Date.now();
  //     state.camera.currentPhoto = `https://pijs.app/jpg/current-photo.jpg?cb=${Date.now()}`;
  //   }

  //   return state;
  // }, 

  

  // [openCamera]: (state) => {
  //   state.camera.updated = Date.now();
  //   state.camera.open = true;
  //   return state;
  // },

  // [closeCamera]: (state) => {
  //   state.camera.updated = Date.now();
  //   state.camera.open = false;
  //   return state;
  // },

  // [toggleCamera]: (state) => {
  //   state.camera.updated = Date.now();
  //   state.camera.open = !state.camera.open;
  //   return state;
  // },