import packageJSON from "../package.json";
import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import initRedux from "./redux/initRedux";
import AppShell from './AppShell';
import * as serviceWorker from './serviceWorker';

console.log(
    `${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`
);

const disablePersitance = true;
const purgeStore = () => {
    console.log(`Persitance Disabled.`);
    localStorage.clear();
};
if (disablePersitance) {
    purgeStore();
}

const persistedRedux = initRedux();

ReactDOM.render(
    <Provider store={persistedRedux.store}>
        <PersistGate loading={null} persistor={persistedRedux.persistor}>
            <AppShell />
        </PersistGate>
    </Provider>,
    document.getElementById("pijs")
);

serviceWorker.register();
