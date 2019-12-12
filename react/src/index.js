import packageJSON from "../package.json";
import React from "react";
import ReactDOM from "react-dom";
import ReactRouter from "./ReactRouter";
import * as serviceWorker from "./serviceWorker";
import initRedux from './redux/initRedux';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

console.log(
    `${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`
);

// console.log('initRedux', initRedux())
const persistedRedux = initRedux();
ReactDOM.render(
    <Provider store={persistedRedux.store}>
        <PersistGate loading={null} persistor={persistedRedux.persistor}>
            <ReactRouter />
        </PersistGate>
    </Provider>
    , document.getElementById("pi"));

serviceWorker.register();
