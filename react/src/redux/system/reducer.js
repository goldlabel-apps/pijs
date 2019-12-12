// System Reducer

import {
    createReducer
} from '@reduxjs/toolkit';
import { first } from './actions';

export const systemSlice = {
    webcam: {
        open: true,
    },
    temperature: {
        open: true,
    },
    humidity: {
        open: true,
    },
    map: {
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
    [first]: (state, action) => {
        console.log ('systemSlice first', action)
        return state;
    }
})

export {system};