import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { reduxBatch } from "@manaflair/redux-batch";
import { system, systemSlice } from "./system/reducer";
import { firebase, firebaseSlice } from "./firebase/reducer";
import { weather, weatherSlice } from "./weather/reducer";

const initRedux = () => {
  const persistConfig = {
    key: "pijs",
    storage
  };

  const reducers = combineReducers({
    system,
    firebase,
    weather,
  });

  const persistedReducer = persistReducer(persistConfig, reducers);

  const preloadedState = {
    system: systemSlice,
    firebase: firebaseSlice,
    weather: weatherSlice,
  };

  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ];

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
