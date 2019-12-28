import { createAction } from "@reduxjs/toolkit";

export const openNav = createAction("SYSTEM/NAV/OPEN");
export const closeNav = createAction("SYSTEM/NAV/CLOSE");

export const openSettings = createAction("SYSTEM/SETTINGS/OPEN");
export const closeSettings = createAction("SYSTEM/SETTINGS/CLOSE");

export const updateClock = createAction("SYSTEM/UPDATE/CLOCK");
