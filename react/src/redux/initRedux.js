import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { reduxBatch } from "@manaflair/redux-batch";
import { system, systemSlice } from "./system/reducer";
import { weather, weatherSlice } from "./weather/reducer";
import { mapbox, mapboxSlice } from "./mapbox/reducer";
import { webcam, webcamSlice } from "./webcam/reducer";
import { environment, environmentSlice } from "./environment/reducer";

const initRedux = () => {
  const persistConfig = {
    key: "pijs",
    storage
  };

  const reducers = combineReducers({
    mapbox,
    system,
    weather,
    webcam,
    environment
  });

  const persistedReducer = persistReducer(persistConfig, reducers);

  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ];

  const preloadedState = {
    system: systemSlice,
    weather: weatherSlice,
    mapbox: mapboxSlice,
    webcam: webcamSlice,
    environment: environmentSlice
  };

  const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
    enhancers: [reduxBatch]
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export default initRedux;
