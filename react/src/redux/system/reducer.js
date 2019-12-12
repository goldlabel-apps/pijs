// System Reducer

import {
    createReducer
} from '@reduxjs/toolkit';
import { first } from './actions';

export const systemSlice = {
}

const system = createReducer(systemSlice, {
    [first]: (state, action) => {
        console.log ('systemSlice first', action)
        return state;
    }
})

export {system};