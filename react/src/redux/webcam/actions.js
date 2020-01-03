import { createAction } from "@reduxjs/toolkit";

export const zoomIn = createAction(`WEBCAM/ZOOM/IN`);
export const zoomOut = createAction(`WEBCAM/ZOOM/OUT`);
export const updatePhoto = createAction(`WEBCAM/UPDATE`);
