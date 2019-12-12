import storage from 'redux-persist/lib/storage';
import {
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import {
    persistStore,
    persistReducer
} from 'redux-persist';
// import logger from 'redux-logger';
import { reduxBatch } from '@manaflair/redux-batch'
import {
    system,
    systemSlice
} from './system/reducer';
import {
    weather,
    weatherSlice
} from './weather/reducer';
import {
    mapbox,
    mapboxSlice
} from './mapbox/reducer';

const initRedux = () => {

    const persistConfig = {
        key: 'pi-firmware',
        storage,
    }

    const reducers = combineReducers({
        mapbox,
        weather,
        system,
    })

    const persistedReducer = persistReducer(persistConfig, reducers);
    
    const middleware = [...getDefaultMiddleware({
        serializableCheck: false,
      })/*, logger */]

    const preloadedState = {
        system: systemSlice,
        weather: weatherSlice,
        mapbox: mapboxSlice,
    }
    
    const store = configureStore({
        reducer: persistedReducer,
        middleware,
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState,
        enhancers: [reduxBatch]
    })

    const persistor = persistStore(store)
    
    return { store, persistor };
}

export default initRedux;
