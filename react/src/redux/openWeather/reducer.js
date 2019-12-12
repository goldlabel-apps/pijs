// Open Weather Reducer

import {
    createReducer
} from '@reduxjs/toolkit';
import {
    getWeather
} from './actions';

export const openWeatherSlice = {
    loading: false,
    updated: Date.now()
}

const openWeather = createReducer(openWeatherSlice, {
    [getWeather]: (state, action) => {
        console.log ('action getWeather', action)
        return state;
    }
})

export {openWeather};