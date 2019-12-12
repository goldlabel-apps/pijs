// System Reducer

import {
    createReducer
} from '@reduxjs/toolkit';
import { first } from './actions';

export const systemSlice = {
    webcam: {
        open: false,
        running: false,
    },
    temperature: {
        open: false,
    },
    humidity: {
        open: false,
    },
    map: {
        open: false,
    },
    pressure: {
        open: false,
    },
    cloud: {
        open: false,
    },
}

const system = createReducer(systemSlice, {
    [first]: (state, action) => {
        console.log ('systemSlice first', action)
        return state;
    }
})

export {system};