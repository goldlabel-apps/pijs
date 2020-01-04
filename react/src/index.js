import packageJSON from "../package.json";
import React from "react";
import ReactDOM from "react-dom";
import initRedux from "./redux/initRedux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import AppShell from "./AppShell";

import {Boot} from "./components";

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
const getStore = () => {
  return persistedRedux.store;
};
export { getStore };

const boot = persistedRedux.store.getState().system.boot.open
console.log('boot', boot)

ReactDOM.render(
  <Provider store={persistedRedux.store}>
    <PersistGate loading={null} persistor={persistedRedux.persistor}>
      {boot ? <Boot /> : <AppShell />}
    </PersistGate>
  </Provider>,
  document.getElementById("pijs")
);

serviceWorker.register();
