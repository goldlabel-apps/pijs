import { createAction } from '@reduxjs/toolkit';

export const update = createAction(`CAMERA/UPDATE`);
export const broken = createAction(`CAMERA/BROKEN`);
export const open = createAction(`CAMERA/OPEN`);
export const close = createAction(`CAMERA/CLOSE`);
export const toggle = createAction(`CAMERA/TOGGLE`);
export const error = createAction(`CAMERA/ERROR`);
export const reset = createAction(`CAMERA/RESET`);
