// Mapbox Reducer

import {
    createReducer
} from '@reduxjs/toolkit';
import {
    doSomething
} from './actions';

export const mapboxSlice = {
    updated: Date.now(),
    lat: -27.211579,
    lng: 153.107658,
    zoom: 12
}

const mapbox = createReducer(mapboxSlice, {
    [doSomething]: (state, action) => {
        console.log ('mapbox action', action)
        return state;
    }
})

export {mapbox};