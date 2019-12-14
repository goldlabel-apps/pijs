// System Reducer

import {
    createReducer
} from '@reduxjs/toolkit';
import {
    systemWebcamUpdate
} from './actions';

export const systemSlice = {
    webcam: {
        updated: Date.now(),
        open: true,
        running: true,
        timerDelay: 60,
    },
    map: {
        open: true,
    },
    temperature: {
        open: true,
    },
    humidity: {
        open: true,
    },
    pressure: {
        open: true,
    },
    cloud: {
        open: true,
    },
}

const system = createReducer(systemSlice, {
    [systemWebcamUpdate]: (state) => {
        console.log ('SYSTEM/WEBCAM/UPDATE')
        state.webcam.updated = Date.now();
        return state;
    },
})

export { system };
