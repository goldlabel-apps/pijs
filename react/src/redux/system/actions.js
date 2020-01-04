import { createAction } from "@reduxjs/toolkit";

export const boot = createAction("SYSTEM/BOOT");
export const toggleBoot = createAction("SYSTEM/BOOT/TOGGLE");
export const tick = createAction("SYSTEM/TICK");
